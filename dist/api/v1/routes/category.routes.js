"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _controller = require("../controller");

/*
Import the internal libraries:
- CategoryController
*/
// Create instance of CategoryController otherwise you can't use it
var categoryController = new _controller.CategoryController();

var initializeEndpoints = function initializeEndpoints(parentRouter, authService) {
  /**
   * @swagger
   * /api/v1/categories:
   *   get:
   *     tags:
   *       - Categories
   *     description: Returns all categories
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: An array of categories
   */
  parentRouter.get('/categories', categoryController.index);
  /**
   * @swagger
   * /api/v1/categories/create:
   *   get:
   *     tags:
   *       - Category
   *     description: Returns specific viewmodel such as categories
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: Create post
   */

  parentRouter.get('/categories/create/', categoryController.create);
  /**
   * @swagger
   * /api/v1/categories/{id}:
   *   get:
   *     tags:
   *       - Category
   *     description: Returns specific post
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: id
   *         description: Category id
   *         in: path
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: Get post by id
   */

  parentRouter.get('/categories/:id', categoryController.show);
  /**
   * @swagger
   * /api/v1/categories:
   *   post:
   *     tags:
   *       - Category
   *     description: Save post
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: post
   *         description: Category object
   *         in: body
   *         required: true
   *     responses:
   *       200:
   *         description: Return saved post
   */

  parentRouter.post('/categories', categoryController.store);
  /**
   * @swagger
   * /api/v1/categories/{id}/edit:
   *   get:
   *     tags:
   *       - Category
   *     description: Returns specific viewmodel such as post, categories
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: id
   *         description: Category id
   *         in: path
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: Edit post by id
   */

  parentRouter.get('/categories/:id/edit', categoryController.edit);
  /**
   * @swagger
   * /api/v1/categories/{id}:
   *   put:
   *     tags:
   *       - Category
   *     description: Update specific post detail
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: id
   *         description: Category id
   *         in: path
   *         required: true
   *         type: string
   *       - name: post object
   *         description: post data
   *         in: body
   *         required: true
   *     responses:
   *       200:
   *         description: Update post
   */

  parentRouter.put('/categories/:id', categoryController.update);
  /**
   * @swagger
   * /api/v1/categories/{id}:
   *   delete:
   *     tags:
   *       - Category
   *     description: Delete specific post detail
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: id
   *         description: Category id
   *         in: path
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: Delete post
   */

  parentRouter["delete"]('/categories/:id', categoryController.destroy);
};

var _default = initializeEndpoints;
exports["default"] = _default;