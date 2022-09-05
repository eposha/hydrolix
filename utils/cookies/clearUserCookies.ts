import { destroyCookie } from 'nookies';

import {
  ACCESS_TOKEN,
  EXPIRY_DATE,
  ORGANIZATION_ID,
  TOKEN_EXPIRES_IN,
  USER_ID,
} from 'utils/constants/user';

const clearUserCookies = () => {
  destroyCookie(null, ACCESS_TOKEN);
  destroyCookie(null, USER_ID);
  destroyCookie(null, TOKEN_EXPIRES_IN);
  destroyCookie(null, EXPIRY_DATE);
  destroyCookie(null, ORGANIZATION_ID);
};

export default clearUserCookies;
