import { setCookie } from 'nookies';

import {
  ACCESS_TOKEN,
  EXPIRY_DATE,
  ORGANIZATION_ID,
  TOKEN_EXPIRES_IN,
  USER_ID,
} from 'utils/constants/user';

const setUserCookies = (user: User) => {
  const now = new Date().getTime();
  const token = user.auth_token.access_token;
  const userId = user.uuid;
  const expiresAge = user.auth_token.expires_in;
  const expiryDate = now + user.auth_token.expires_in * 1000;
  const orgId = user.orgs[0].uuid;

  setCookie(null, ACCESS_TOKEN, token, {
    maxAge: expiresAge,
    path: '/',
  });

  setCookie(null, USER_ID, userId, {
    maxAge: expiresAge,
    path: '/',
  });

  setCookie(null, TOKEN_EXPIRES_IN, `${expiresAge}`, {
    maxAge: expiresAge,
    path: '/',
  });

  setCookie(null, EXPIRY_DATE, `${expiryDate}`, {
    maxAge: expiresAge,
    path: '/',
  });

  setCookie(null, ORGANIZATION_ID, orgId, {
    maxAge: expiresAge,
    path: '/',
  });
};

export default setUserCookies;
