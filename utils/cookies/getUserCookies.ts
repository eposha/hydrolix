import { parseCookies } from 'nookies';

import {
  ACCESS_TOKEN,
  EXPIRY_DATE,
  ORGANIZATION_ID,
  TOKEN_EXPIRES_IN,
  USER_ID,
} from 'utils/constants/user';

const getUserCookies = () => {
  const cookies = parseCookies();

  const token = cookies[ACCESS_TOKEN];
  const userId = cookies[USER_ID];
  const expiresAge = cookies[TOKEN_EXPIRES_IN];
  const expiryDate = cookies[EXPIRY_DATE] || 0;
  const orgId = cookies[ORGANIZATION_ID];

  const now = new Date().getTime();
  const isExpired = now > +expiryDate;

  return { token, userId, expiresAge, expiryDate, orgId, isExpired };
};

export default getUserCookies;
