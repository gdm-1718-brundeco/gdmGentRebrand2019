"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _controller = require("../controller");

var projectImageController = new _controller.ProjectImageController();

var initializeEndpoints = function initializeEndpoints(parentRouter, authService) {
  parentRouter.get('/projectimages', projectImageController.index);
  parentRouter.get('/projectimages/create', projectImageController.create);
  parentRouter.get('/projectimages/:id', projectImageController.show);
  parentRouter.post('/projectimages', projectImageController.store);
  parentRouter.get('/projectimages/edit/:id', projectImageController.edit);
  parentRouter.put('/projectimages/:id', projectImageController.update);
  parentRouter["delete"]('/projectimages/:id', projectImageController.destroy);
};

var _default = initializeEndpoints;
exports["default"] = _default;