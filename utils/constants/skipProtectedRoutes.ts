import { ROUTES } from './routes';

const SKIP_PROTECTED_ROUTES = [ROUTES.login, ROUTES.passwordReset, ROUTES.verifyAccount];

export default SKIP_PROTECTED_ROUTES;
