"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _controller = require("../controller");

var projectController = new _controller.ProjectController();

var initializeEndpoints = function initializeEndpoints(parentRouter, authService) {
  parentRouter.get('/projects', projectController.index);
  parentRouter.get('/projects/create', projectController.create);
  parentRouter.get('/projects/:id', projectController.show);
  parentRouter.post('/projects', projectController.store);
  parentRouter.get('/projects/edit/:id', projectController.edit);
  parentRouter.put('/projects/:id', projectController.update);
  parentRouter["delete"]('/projects/:id', projectController.destroy);
};

var _default = initializeEndpoints;
exports["default"] = _default;