/*
Import external libraries
*/
import passport from 'passport';
import * as passportLocal from 'passport-local';
import passportJWT from 'passport-jwt';
import * as passportGithub from 'passport-github';
import cookieSession from 'cookie-session';

/*
Import internal libraries
*/
import { User } from '../database';
import config from '../../../config';

/*
Constants
*/
const LocalStrategy = passportLocal.Strategy;
const GitHubStrategy = passportGithub.Strategy;
const { ExtractJwt, Strategy: JwtStrategy } = passportJWT;

class AuthService {
    constructor() {
        this.initializeLocalStrategy();
				this.initializeJwtStrategy();
				this.initializeGithubStrategy();
        passport.serializeUser((user, done) => {
            done(null, user.id);
        });
        passport.deserializeUser((id, done) => {
						User.findById(id).then((user) => {
							console.log(user);
							done(null, user);
						});
				});
        this.passport = passport;
		}
		
		initializeGithubStrategy = () => {
			passport.use(new GitHubStrategy(
				{
					clientID: config.auth.github.clientID,
					clientSecret: config.auth.github.clientSecret,
					callbackUrL: "http://127.0.0.1:8080/api/v1/login/github/redirect",
				},
				function(accessToken, refreshToken, profile, done) {
					User.findOne({ 'githubProvider.id': profile.id }).then((currentUser) => {
						if(currentUser) {
							done(null, currentUser);
						} else {
							new User({
								email: profile.emails[0].value,
								githubProvider: {
									id: profile.id,
									token: accessToken,
								}
							}).save().then((newUser) => {
								done(null, newUser);
							});
						}
					});
					// User.findOrCreate({ githubId: profile.id }, function(err, user) {
					// 	return cb(err,user);
					// });
				}
			));
		}

    initializeLocalStrategy = () => {
			passport.use(new LocalStrategy({
				usernameField: 'email',
			},
				async (email, password, done) => {
					const user = await User.findOne({email});
					if (!user) { return done(null, false); }
					return user.comparePassword(password, (isMatch) => {
						if(!isMatch) {
							return done(null, false);
						} else {
							return done(null, user);
						}
					});
				}
			))
        // passport.use(new LocalStrategy(
        //     {
        //         usernameField: 'email',
        //     },
        //     async (email, password, done) => {
        //         try {
        //             const user = await User.findOne({
        //                 email,
        //             });

        //             if (!user) {
        //                 return done(null, false, { message: 'No user by that email' });
        //             }

        //             return user.comparePassword(password, (isMatch) => {
				// 							console.log(password);
        //                 if (!isMatch) {
        //                     return done(null, false);
        //                 }
        //                 return done(null, user);
        //             });
        //         } catch (error) {
        //             return done(error);
        //         }
        //     },
        // ));
    }

    initializeJwtStrategy = () => {
        passport.use(new JwtStrategy(
            {
                secretOrKey: config.auth.jwtSecret,
                jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            },
            (jwtPayload, done) => {
                const { id } = jwtPayload;
                User.findById(id, (err, user) => {
                    if (err) { return done(err); }
                    if (!user) { return done(null, false); }
                    return done(null, user);
                });
            },
        ));
    }
}

export default AuthService;
