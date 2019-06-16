/*
Import the internal libraries:
- AuthController
*/
import { AuthController } from '../controller';

// Create instance of AuthController otherwise you can't use it
const authController = new AuthController();

const initializeEndpoints = (parentRouter, authService) => {
		parentRouter.get('/login/github', (req, res, next) =>  authController.loginGithub(authService, req, res, next));
		parentRouter.get('/login/github/redirect', (req, res, next) => authController.redirectGithub(authService, req, res, next));
		parentRouter.post('/login', (req, res, next) => authController.loginLocal(authService, req, res, next));
		parentRouter.get('/logout', (req, res, next) => {
			authController.logout(authService, req, res, next)
		});
		parentRouter.get('/whoami', (req, res, next) => authController.checkLogin(authService, req, res, next));
};

export default initializeEndpoints;
