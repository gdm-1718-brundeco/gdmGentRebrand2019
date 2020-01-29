"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _utilities = require("../../../utilities");

var _config = _interopRequireDefault(require("../../../config"));

var _fs = require("fs");

/*
Import the internal libraries:
- * from database
- errorHandler
*/
var AuthController = function AuthController() {
  (0, _classCallCheck2["default"])(this, AuthController);
  (0, _defineProperty2["default"])(this, "loginLocal",
  /*#__PURE__*/
  function () {
    var _ref = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee(authService, req, res, next) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              authService.passport.authenticate('local', _config["default"].auth.jwtSession, function (err, user, info) {
                if (err) {
                  return next(err);
                }

                if (!user) {
                  return next(new Error("kkjkj"));
                }

                req.auth = {
                  id: user.id
                };
                var token = (0, _utilities.createToken)(req.auth);
                return res.status(200).json({
                  email: user.email,
                  token: "".concat(token),
                  strategy: 'local'
                });
              })(req, res, next);

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2, _x3, _x4) {
      return _ref.apply(this, arguments);
    };
  }());
  (0, _defineProperty2["default"])(this, "loginGithub",
  /*#__PURE__*/
  function () {
    var _ref2 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2(authService, req, res, next) {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              authService.passport.authenticate('github')(req, res, next);

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x5, _x6, _x7, _x8) {
      return _ref2.apply(this, arguments);
    };
  }());
  (0, _defineProperty2["default"])(this, "redirectGithub",
  /*#__PURE__*/
  function () {
    var _ref3 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee3(authService, req, res, next) {
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              authService.passport.authenticate('github', {
                failureRedirect: '/login'
              })(req, res, next);
              res.send(req.user);

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x9, _x10, _x11, _x12) {
      return _ref3.apply(this, arguments);
    };
  }());
  (0, _defineProperty2["default"])(this, "logout",
  /*#__PURE__*/
  function () {
    var _ref4 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee4(authService, req, res, next) {
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              req.logout();
              return _context4.abrupt("return", res.redirect('/'));

            case 2:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function (_x13, _x14, _x15, _x16) {
      return _ref4.apply(this, arguments);
    };
  }());
  (0, _defineProperty2["default"])(this, "checkLogin",
  /*#__PURE__*/
  function () {
    var _ref5 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee5(authService, req, res, next) {
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (!req.session.user) {
                _context5.next = 4;
                break;
              }

              return _context5.abrupt("return", res.status(200).json({
                message: 'logged in',
                user: req.session.user
              }));

            case 4:
              return _context5.abrupt("return", res.status(200).json({
                message: "Not logged in"
              }));

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function (_x17, _x18, _x19, _x20) {
      return _ref5.apply(this, arguments);
    };
  }());
};

var _default = AuthController;
exports["default"] = _default;