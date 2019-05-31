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

var _database = require("../database");

var _utilities = require("../../../utilities");

var ProjectController = function ProjectController() {
  (0, _classCallCheck2["default"])(this, ProjectController);
  (0, _defineProperty2["default"])(this, "index",
  /*#__PURE__*/
  function () {
    var _ref = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee(req, res, next) {
      var _req$query, limit, skip, projects, options;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _req$query = req.query, limit = _req$query.limit, skip = _req$query.skip;
              projects = null;

              if (!(limit && skip)) {
                _context.next = 10;
                break;
              }

              options = {
                page: parseInt(skip, 10) || 1,
                limit: parseInt(limit, 10) || 10,
                populate: ['images', 'category'],
                sort: {
                  created_at: -1
                }
              };
              _context.next = 7;
              return _database.Project.paginate({}, options);

            case 7:
              projects = _context.sent;
              _context.next = 13;
              break;

            case 10:
              _context.next = 12;
              return _database.Project.find().populate(['category', 'images']).sort({
                created_at: -1
              }).exec();

            case 12:
              projects = _context.sent;

            case 13:
              if (!(projects === undefined || projects === null)) {
                _context.next = 15;
                break;
              }

              throw new _utilities.APIError(404, 'Collection for projects not found');

            case 15:
              return _context.abrupt("return", res.status(200).json(projects));

            case 18:
              _context.prev = 18;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", (0, _utilities.handleAPIError)(500, _context.t0.message || 'Some error occured while retrieving posts', next));

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 18]]);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }());
  (0, _defineProperty2["default"])(this, "show",
  /*#__PURE__*/
  function () {
    var _ref2 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2(req, res, next) {
      var id, item;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              id = req.params.id;
              _context2.next = 4;
              return _database.Project.findById(id).populate(['category', 'images']).exec();

            case 4:
              item = _context2.sent;

              if (!(item === undefined || item === null)) {
                _context2.next = 7;
                break;
              }

              throw new _utilities.APIError(404, "Project with id ".concat(id, " not found"));

            case 7:
              return _context2.abrupt("return", res.status(200).json(item));

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](0);
              return _context2.abrupt("return", (0, _utilities.handleAPIError)(_context2.t0.status || 500, _context2.t0.message || 'Something went wrong while retrieving posts', next));

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 10]]);
    }));

    return function (_x4, _x5, _x6) {
      return _ref2.apply(this, arguments);
    };
  }());
  (0, _defineProperty2["default"])(this, "create",
  /*#__PURE__*/
  function () {
    var _ref3 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee3(req, res, next) {
      var vm;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              vm = {
                categories: []
              };
              return _context3.abrupt("return", res.status(200).json(vm));

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x7, _x8, _x9) {
      return _ref3.apply(this, arguments);
    };
  }());
  (0, _defineProperty2["default"])(this, "store",
  /*#__PURE__*/
  function () {
    var _ref4 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee4(req, res, next) {
      var projectCreate, _project;

      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              projectCreate = new _database.Project({
                title: req.body.title,
                synopsis: req.body.synopsis,
                body: req.body.body,
                categoryId: req.body.categoryId,
                images: req.body.images
              });
              _context4.next = 4;
              return projectCreate.save();

            case 4:
              _project = _context4.sent;
              return _context4.abrupt("return", res.status(201).json(_project));

            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4["catch"](0);
              return _context4.abrupt("return", (0, _utilities.handleAPIError)(_context4.t0.status || 500, _context4.t0.message || 'Something went wrong while saving the Project.', next));

            case 11:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 8]]);
    }));

    return function (_x10, _x11, _x12) {
      return _ref4.apply(this, arguments);
    };
  }());
  (0, _defineProperty2["default"])(this, "edit",
  /*#__PURE__*/
  function () {
    var _ref5 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee5(req, res, next) {
      var id, _project2, vm;

      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              id = req.params.id;
              _context5.prev = 1;
              _context5.next = 4;
              return _database.Project.findById(id).exec();

            case 4:
              _project2 = _context5.sent;

              if (_project2) {
                _context5.next = 9;
                break;
              }

              throw new _utilities.APIError(404, "Project with id: ".concat(id, " not found."));

            case 9:
              vm = {
                post: post,
                categories: []
              };
              return _context5.abrupt("return", res.status(200).json(vm));

            case 11:
              _context5.next = 16;
              break;

            case 13:
              _context5.prev = 13;
              _context5.t0 = _context5["catch"](1);
              return _context5.abrupt("return", (0, _utilities.handleAPIError)(_context5.t0.status || 500, _context5.t0.message || "Some error occured while editing the Project with id: ".concat(id), next));

            case 16:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[1, 13]]);
    }));

    return function (_x13, _x14, _x15) {
      return _ref5.apply(this, arguments);
    };
  }());
  (0, _defineProperty2["default"])(this, "update",
  /*#__PURE__*/
  function () {
    var _ref6 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee6(req, res, next) {
      var id, projectUpdate, _project3;

      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              id = req.params.id;
              _context6.prev = 1;
              projectUpdate = req.body;
              _context6.next = 5;
              return _database.Project.findOneAndUpdate({
                _id: id
              }, projectUpdate, {
                "new": true
              }).exec();

            case 5:
              _project3 = _context6.sent;

              if (_project3) {
                _context6.next = 8;
                break;
              }

              throw new _utilities.APIError(404, "Post with id: ".concat(id, " not found."));

            case 8:
              return _context6.abrupt("return", res.status(200).json(_project3));

            case 11:
              _context6.prev = 11;
              _context6.t0 = _context6["catch"](1);
              return _context6.abrupt("return", (0, _utilities.handleAPIError)(_context6.t0.status || 500, _context6.t0.message || "Some error occured while updating the post with id: ".concat(id)));

            case 14:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[1, 11]]);
    }));

    return function (_x16, _x17, _x18) {
      return _ref6.apply(this, arguments);
    };
  }());
  (0, _defineProperty2["default"])(this, "destroy",
  /*#__PURE__*/
  function () {
    var _ref7 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee7(req, res, next) {
      var id, _project4, mode;

      return _regenerator["default"].wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              id = req.params.id;
              _context7.prev = 1;
              _project4 = null;
              mode = req.query.mode;

              if (!mode) {
                _context7.next = 10;
                break;
              }

              _context7.next = 7;
              return _database.Project.findByIdAndUpdate({
                _id: id
              }, {
                deleted_at: mode === 'softDelete' ? Date.now() : null
              }, {
                "new": true
              });

            case 7:
              _project4 = _context7.sent;
              _context7.next = 14;
              break;

            case 10:
              mode = 'delete';
              _context7.next = 13;
              return _database.Project.findByIdAndRemove({
                _id: id
              });

            case 13:
              _project4 = _context7.sent;

            case 14:
              if (_project4) {
                _context7.next = 18;
                break;
              }

              throw new _utilities.APIError(404, "Project with id: ".concat(id, " not found."));

            case 18:
              return _context7.abrupt("return", res.status(200).json({
                message: "Successfully deleted the Project with id: ".concat(id, "."),
                post: post,
                mode: mode
              }));

            case 19:
              _context7.next = 24;
              break;

            case 21:
              _context7.prev = 21;
              _context7.t0 = _context7["catch"](1);
              return _context7.abrupt("return", (0, _utilities.handleAPIError)(_context7.t0.status || 500, _context7.t0.message || "Some error occured while deleting Project with id: ".concat(project, "."), next));

            case 24:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[1, 21]]);
    }));

    return function (_x19, _x20, _x21) {
      return _ref7.apply(this, arguments);
    };
  }());
};

var _default = ProjectController;
exports["default"] = _default;