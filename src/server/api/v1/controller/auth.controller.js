/*
Import the internal libraries:
- * from database
- errorHandler
*/
import { APIError, handleAPIError, createToken } from '../../../utilities';
import config from '../../../config';
import { read } from 'fs';

class AuthController {
    loginLocal = async (authService, req, res, next) => {
        authService.passport.authenticate('local', config.jwtSession, (err, user, info) => {
            if (err) { return next(err); }
            if (!user) {
                return next(new Error("kkjkj"));
            }
            req.auth = {
                id: user.id,
						};
            const token = createToken(req.auth);
            return res.status(200).json({
                email: user.email,
                token: `${token}`,
								strategy: 'local',
            });
				})(req, res, next);
		};

		loginGithub = async (authService, req, res, next) => {
			authService.passport.authenticate('github')(req,res,next);
		};

		redirectGithub = async (authService, req, res, next) => {
			authService.passport.authenticate('github',{  failureRedirect: '/login' })(req,res,next);
			res.send(req.user)
		};
		
		logout = async (authService, req, res, next) => {
			req.logout();
			return res.redirect('/')
		}

		checkLogin = async (authService, req, res, next) => {
			if(req.session.user) {
				return res.status(200).json({
					message: 'logged in',
					user: req.session.user,
				});
			} else {
				return res.status(200).json({
					message: "Not logged in"
				});
			}
		}
}

export default AuthController;
