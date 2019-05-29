"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _controller = require("../controller");

var eventController = new _controller.EventController();

var initializeEndpoints = function initializeEndpoints(parentRouter, authService) {
  parentRouter.get('/events', eventController.index);
  parentRouter.get('/events/create', eventController.create);
  parentRouter.get('/events/:id', eventController.show);
  parentRouter.post('/events', eventController.store);
  parentRouter.get('/events/edit/:id', eventController.edit);
  parentRouter.put('/events/:id', eventController.update);
  parentRouter["delete"]('/events/:id', eventController.destroy);
};

var _default = initializeEndpoints;
exports["default"] = _default;