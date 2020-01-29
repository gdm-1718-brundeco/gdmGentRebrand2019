"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _controller = require("../controller");

var projectController = new _controller.ProjectController();

var initializeEndpoints = function initializeEndpoints(parentRouter, authService) {
  /**
   * @swagger
   * /api/v1/projects:
   *   get:
   *     tags:
   *       - Projects
   *     description: Returns all projects
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: An array of projects
   */
  parentRouter.get('/projects', projectController.index);
  /**
   * @swagger
   * /api/v1/projects/create:
   *   get:
   *     tags:
   *       - Project
   *     description: Returns specific viewmodel such as projects
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: Create project
   */

  parentRouter.get('/projects/create', projectController.create);
  /**
   * @swagger
   * /api/v1/projects/{id}:
   *   get:
   *     tags:
   *       - Project
   *     description: Returns specific project
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: id
   *         description: Project id
   *         in: path
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: Get project by id
   */

  parentRouter.get('/projects/:id', projectController.show);
  /**
   * @swagger
   * /api/v1/projects:
   *   post:
   *     tags:
   *       - Project
   *     description: Save project
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: project
   *         description: Project object
   *         in: body
   *         required: true
   *     responses:
   *       200:
   *         description: Return saved project
   */

  parentRouter.post('/projects', projectController.store);
  /**
   * @swagger
   * /api/v1/projects/{id}/edit:
   *   get:
   *     tags:
   *       - Project
   *     description: Returns specific viewmodel such as project, projects
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: id
   *         description: Project id
   *         in: path
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: Edit project by id
   */

  parentRouter.get('/projects/:id/edit', projectController.edit);
  /**
   * @swagger
   * /api/v1/projects/{id}:
   *   put:
   *     tags:
   *       - Project
   *     description: Update specific project detail
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: id
   *         description: Project id
   *         in: path
   *         required: true
   *         type: string
   *       - name: project object
   *         description: project data
   *         in: body
   *         required: true
   *     responses:
   *       200:
   *         description: Update project
   */

  parentRouter.put('/projects/:id', projectController.update);
  /**
   * @swagger
   * /api/v1/projects/{id}:
   *   delete:
   *     tags:
   *       - Project
   *     description: Delete specific project detail
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: id
   *         description: Project id
   *         in: path
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: Delete project
   */

  parentRouter["delete"]('/projects/:id', projectController.destroy);
};

var _default = initializeEndpoints;
exports["default"] = _default;