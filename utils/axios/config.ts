/* eslint-disable newline-before-return */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import Router from 'next/router';
import axios from 'axios';

import { getUserCookies } from 'utils/cookies';
import SKIP_PROTECTED_ROUTES from 'utils/constants/skipProtectedRoutes';

//@ts-ignore
const flattenErrors = (value, oldData) => {
  if (Array.isArray(value) && !(typeof value[0] === 'string')) {
    const result = {};
    value.forEach((v, i) => {
      //@ts-ignore
      result[i] = flattenErrors(v, oldData && oldData[i]);
    });

    return result;
  }
  if (Array.isArray(value) && typeof value[0] === 'string') {
    // return { _error: value[0] };
    return value[0];
  }
  if (typeof value === 'string' || !value) {
    return value;
  }

  const obj = {};
  Object.keys(value).map((fieldName) => {
    //@ts-ignore
    obj[fieldName] = flattenErrors(value[fieldName], oldData && oldData[fieldName]);

    //@ts-ignore
    return obj[fieldName];
  });

  return obj;
};

const successfulResponse = async (response: unknown) => {
  return await response;
};

const errorResponse = async (error: { code?: number | string; config?: any; response: any }) => {
  let code = 0;
  let errorMessage = '';
  const { response } = await error;

  if (error.code === 'ECONNABORTED') {
    code = 408;
    errorMessage = 'The request has timed out';

    return Promise.reject({
      code,
      error: {
        _error: {
          code,
          message: errorMessage,
        },
      },
    });
  }
  if (!response) {
    // request didn't make it to server
    code = 503;
    errorMessage = "API unavailable at the moment, we'll be back shortly. ";
  } else if (response.status === 500) {
    code = response.status;
    errorMessage =
      'Internal server error. If this is reoccurring, ' +
      'please contact us at support@hydrolix.com';
  } else if (response.status === 501) {
    code = response.status;
    errorMessage =
      'Not Implemented. If this is reoccurring, ' + 'please contact us at support@hydrolix.com';
  } else if (response.status === 502) {
    code = response.status;
    errorMessage =
      'Bad Gateway. If this is reoccurring, ' + 'please contact us at support@hydrolix.com';
  } else if (response.status === 503) {
    code = response.status;
    errorMessage =
      'Service Unavailable. If this is reoccurring, ' + 'please contact us at support@hydrolix.com';
  } else if (response.status === 504) {
    code = response.status;
    errorMessage =
      'Gateway Timeout. If this is reoccurring, ' + 'please contact us at support@hydrolix.com';
  } else if (response.status === 401) {
    code = response.status;
    errorMessage = response.data.detail || response.statusText;
  } else if (response.status === 403) {
    code = response.status;
    errorMessage = response.data.detail;
  } else if (response.status === 404) {
    code = response.status;
    errorMessage = `${response.status} Error: ${response.statusText}.`;
  } else if (response.status === 406) {
    code = response.status;
    errorMessage = response.statusText;
  }

  if (response.status === 400 && response.config.url.includes('?query=')) {
    code = response.status;
    errorMessage = response.data || response.statusText;
  }

  if (code !== 0) {
    /* eslint-disable-next-line no-console */
    console.error(`request error, code: ${code}`, errorMessage);

    return Promise.reject({
      code,
      error: {
        _error: {
          code,
          message: errorMessage,
        },
      },
    });
  }
  let oldData = response.data;
  try {
    oldData = JSON.parse(error.config.data || '{}');
  } catch (err) {
    console.warn('error is', error);

    console.warn('Failed to parse request', err, error.config && error.config.data);
  }

  const finalError = {};

  const responseError = error.response && error.response.data;
  Object.keys(responseError || {}).map((fieldName) => {
    let key = fieldName;
    if (key === 'non_field_errors' || key === 'detail' || key === 'error_description') {
      key = '_error';
    }
    //@ts-ignore
    finalError[key] = flattenErrors(responseError[fieldName], oldData[fieldName]);

    //@ts-ignore
    return finalError[key];
  });

  return Promise.reject({ code, error: { ...finalError } });
};

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
axios.defaults.timeout = 300000;

axios.interceptors.request.use(
  (config) => {
    const { token } = getUserCookies();

    const isSkippedPath = SKIP_PROTECTED_ROUTES.find((path) => Router.pathname.includes(path));

    if (config?.headers && !isSkippedPath) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(successfulResponse, errorResponse);
