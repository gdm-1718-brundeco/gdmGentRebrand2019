import { ProjectImageController } from '../controller';

const projectImageController = new ProjectImageController();

const initializeEndpoints = (parentRouter, authService) => {
	/**
	 * @swagger
	 * /api/v1/projectimages:
	 *   get:
	 *     tags:
	 *       - Projectimages
	 *     description: Returns all projectimages
	 *     produces:
	 *       - application/json
	 *     responses:
	 *       200:
	 *         description: An array of projectimages
	 */
	parentRouter.get('/projectimages', projectImageController.index);
	/**
	 * @swagger
	 * /api/v1/projectimages/create:
	 *   get:
	 *     tags:
	 *       - Projectimage
	 *     description: Returns specific viewmodel such as projectimages
	 *     produces:
	 *       - application/json
	 *     responses:
	 *       200:
	 *         description: Create projectimage
	 */
	parentRouter.get('/projectimages/create', projectImageController.create);
	/**
	 * @swagger
	 * /api/v1/projectimages/{id}:
	 *   get:
	 *     tags:
	 *       - Projectimage
	 *     description: Returns specific projectimage
	 *     produces:
	 *       - application/json
	 *     parameters:
	 *       - name: id
	 *         description: Projectimage id
	 *         in: path
	 *         required: true
	 *         type: string
	 *     responses:
	 *       200:
	 *         description: Get projectimage by id
	 */
	parentRouter.get('/projectimages/:id', projectImageController.show);
	/**
	 * @swagger
	 * /api/v1/projectimages:
	 *   post:
	 *     tags:
	 *       - Projectimage
	 *     description: Save projectimage
	 *     produces:
	 *       - application/json
	 *     parameters:
	 *       - name: projectimage
	 *         description: Projectimage object
	 *         in: body
	 *         required: true
	 *     responses:
	 *       200:
	 *         description: Return saved projectimage
	 */
	parentRouter.post('/projectimages', projectImageController.store);
	/**
	 * @swagger
	 * /api/v1/projectimages/{id}/edit:
	 *   get:
	 *     tags:
	 *       - Projectimage
	 *     description: Returns specific viewmodel such as projectimage
	 *     produces:
	 *       - application/json
	 *     parameters:
	 *       - name: id
	 *         description: Projectimage id
	 *         in: path
	 *         required: true
	 *         type: string
	 *     responses:
	 *       200:
	 *         description: Edit projectimage by id
	 */
	parentRouter.get('/projectimages/:id/edit', projectImageController.edit);
	/**
	 * @swagger
	 * /api/v1/projectimages/{id}:
	 *   put:
	 *     tags:
	 *       - Projectimage
	 *     description: Update specific projectimage detail
	 *     produces:
	 *       - application/json
	 *     parameters:
	 *       - name: id
	 *         description: Projectimage id
	 *         in: path
	 *         required: true
	 *         type: string
	 *       - name: projectimage object
	 *         description: projectimage data
	 *         in: body
	 *         required: true
	 *     responses:
	 *       200:
	 *         description: Update projectimage
	 */
	parentRouter.put('/projectimages/:id', projectImageController.update);
	/**
	 * @swagger
	 * /api/v1/projectimages/{id}:
	 *   delete:
	 *     tags:
	 *       - Projectimage
	 *     description: Delete specific projectimage detail
	 *     produces:
	 *       - application/json
	 *     parameters:
	 *       - name: id
	 *         description: Projectimage id
	 *         in: path
	 *         required: true
	 *         type: string
	 *     responses:
	 *       200:
	 *         description: Delete projectimage
	 */
	parentRouter.delete('/projectimages/:id', projectImageController.destroy);
}

export default initializeEndpoints;