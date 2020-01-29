"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _controller = require("../controller");

/*
Import the internal libraries:
- AuthController
*/
// Create instance of AuthController otherwise you can't use it
var authController = new _controller.AuthController();

var initializeEndpoints = function initializeEndpoints(parentRouter, authService) {
  parentRouter.get('/login/github', function (req, res, next) {
    return authController.loginGithub(authService, req, res, next);
  });
  parentRouter.get('/login/github/redirect', function (req, res, next) {
    return authController.redirectGithub(authService, req, res, next);
  });
  parentRouter.post('/login', function (req, res, next) {
    return authController.loginLocal(authService, req, res, next);
  });
  parentRouter.get('/logout', function (req, res, next) {
    authController.logout(authService, req, res, next);
  });
  parentRouter.get('/whoami', function (req, res, next) {
    return authController.checkLogin(authService, req, res, next);
  });
};

var _default = initializeEndpoints;
exports["default"] = _default;