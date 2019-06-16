import { TypeController } from '../controller';

const typeController = new TypeController();

const initializeEndpoints = (parentRouter, authService) => {
	/**
	 * @swagger
	 * /api/v1/types:
	 *   get:
	 *     tags:
	 *       - Types
	 *     description: Returns all types
	 *     produces:
	 *       - application/json
	 *     responses:
	 *       200:
	 *         description: An array of types
	 */
	parentRouter.get('/types', typeController.index);
	/**
	 * @swagger
	 * /api/v1/types/create:
	 *   get:
	 *     tags:
	 *       - Type
	 *     description: Returns specific viewmodel such as types
	 *     produces:
	 *       - application/json
	 *     responses:
	 *       200:
	 *         description: Create type
	 */
	parentRouter.get('/types/create', typeController.create);
	/**
	 * @swagger
	 * /api/v1/types/{id}:
	 *   get:
	 *     tags:
	 *       - Type
	 *     description: Returns specific type
	 *     produces:
	 *       - application/json
	 *     parameters:
	 *       - name: id
	 *         description: Type id
	 *         in: path
	 *         required: true
	 *         type: string
	 *     responses:
	 *       200:
	 *         description: Get type by id
	 */
	parentRouter.get('/types/:id', typeController.show);
	/**
	 * @swagger
	 * /api/v1/types:
	 *   post:
	 *     tags:
	 *       - Type
	 *     description: Save type
	 *     produces:
	 *       - application/json
	 *     parameters:
	 *       - name: type
	 *         description: Type object
	 *         in: body
	 *         required: true
	 *     responses:
	 *       200:
	 *         description: Return saved type
	 */
	parentRouter.post('/types', typeController.store);
	/**
	 * @swagger
	 * /api/v1/type/{id}/edit:
	 *   get:
	 *     tags:
	 *       - Type
	 *     description: Returns specific viewmodel such as types
	 *     produces:
	 *       - application/json
	 *     parameters:
	 *       - name: id
	 *         description: Type id
	 *         in: path
	 *         required: true
	 *         type: string
	 *     responses:
	 *       200:
	 *         description: Edit type by id
	 */
	parentRouter.get('/types/:id/edit', typeController.edit);
	/**
	 * @swagger
	 * /api/v1/types/{id}:
	 *   put:
	 *     tags:
	 *       - Type
	 *     description: Update specific type detail
	 *     produces:
	 *       - application/json
	 *     parameters:
	 *       - name: id
	 *         description: Type id
	 *         in: path
	 *         required: true
	 *         type: string
	 *       - name: type object
	 *         description: type data
	 *         in: body
	 *         required: true
	 *     responses:
	 *       200:
	 *         description: Update type
	 */
	parentRouter.put('/types/:id', typeController.update);
	/**
	 * @swagger
	 * /api/v1/types/{id}:
	 *   delete:
	 *     tags:
	 *       - Type
	 *     description: Delete specific type detail
	 *     produces:
	 *       - application/json
	 *     parameters:
	 *       - name: id
	 *         description: Type id
	 *         in: path
	 *         required: true
	 *         type: string
	 *     responses:
	 *       200:
	 *         description: Delete type
	 */
	parentRouter.delete('/types/:id', typeController.destroy);
}

export default initializeEndpoints;