"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _passport = _interopRequireDefault(require("passport"));

var passportLocal = _interopRequireWildcard(require("passport-local"));

var _passportJwt = _interopRequireDefault(require("passport-jwt"));

var passportGithub = _interopRequireWildcard(require("passport-github"));

var _cookieSession = _interopRequireDefault(require("cookie-session"));

var _database = require("../database");

var _config = _interopRequireDefault(require("../../../config"));

/*
Import external libraries
*/

/*
Import internal libraries
*/

/*
Constants
*/
var LocalStrategy = passportLocal.Strategy;
var GitHubStrategy = passportGithub.Strategy;
var ExtractJwt = _passportJwt["default"].ExtractJwt,
    JwtStrategy = _passportJwt["default"].Strategy;

var AuthService = function AuthService() {
  (0, _classCallCheck2["default"])(this, AuthService);
  (0, _defineProperty2["default"])(this, "initializeGithubStrategy", function () {
    _passport["default"].use(new GitHubStrategy({
      clientID: _config["default"].auth.github.clientID,
      clientSecret: _config["default"].auth.github.clientSecret,
      callbackUrL: "http://127.0.0.1:8080/api/v1/login/github/redirect"
    }, function (accessToken, refreshToken, profile, done) {
      _database.User.findOne({
        'githubProvider.id': profile.id
      }).then(function (currentUser) {
        if (currentUser) {
          done(null, currentUser);
        } else {
          new _database.User({
            email: profile.emails[0].value,
            githubProvider: {
              id: profile.id,
              token: accessToken
            }
          }).save().then(function (newUser) {
            done(null, newUser);
          });
        }
      }); // User.findOrCreate({ githubId: profile.id }, function(err, user) {
      // 	return cb(err,user);
      // });

    }));
  });
  (0, _defineProperty2["default"])(this, "initializeLocalStrategy", function () {
    _passport["default"].use(new LocalStrategy({
      usernameField: 'email'
    },
    /*#__PURE__*/
    function () {
      var _ref = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(email, password, done) {
        var user;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _database.User.findOne({
                  email: email
                });

              case 2:
                user = _context.sent;

                if (user) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", done(null, false));

              case 5:
                return _context.abrupt("return", user.comparePassword(password, function (isMatch) {
                  if (!isMatch) {
                    return done(null, false);
                  } else {
                    return done(null, user);
                  }
                }));

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }())); // passport.use(new LocalStrategy(
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

  });
  (0, _defineProperty2["default"])(this, "initializeJwtStrategy", function () {
    _passport["default"].use(new JwtStrategy({
      secretOrKey: _config["default"].auth.jwtSecret,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    }, function (jwtPayload, done) {
      var id = jwtPayload.id;

      _database.User.findById(id, function (err, user) {
        if (err) {
          return done(err);
        }

        if (!user) {
          return done(null, false);
        }

        return done(null, user);
      });
    }));
  });
  this.initializeLocalStrategy();
  this.initializeJwtStrategy();
  this.initializeGithubStrategy();

  _passport["default"].serializeUser(function (user, done) {
    done(null, user.id);
  });

  _passport["default"].deserializeUser(function (id, done) {
    _database.User.findById(id).then(function (user) {
      console.log(user);
      done(null, user);
    });
  });

  this.passport = _passport["default"];
};

var _default = AuthService;
exports["default"] = _default;