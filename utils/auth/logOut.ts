import type { NextRouter } from 'next/router';

import { ROUTES } from 'utils/constants/routes';
import clearUserCookies from 'utils/cookies/clearUserCookies';

export const LogOut = (router: NextRouter) => {
  clearUserCookies();
  router.push(ROUTES.login);
};
