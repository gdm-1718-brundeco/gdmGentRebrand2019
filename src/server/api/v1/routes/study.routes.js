import { StudyController } from '../controller';

const studyController = new StudyController();

const initializeEndpoints = (parentRouter, authService) => {
	/**
	 * @swagger
	 * /api/v1/studies:
	 *   get:
	 *     tags:
	 *       - Studies
	 *     description: Returns all studies
	 *     produces:
	 *       - application/json
	 *     responses:
	 *       200:
	 *         description: An array of studies
	 */
	parentRouter.get('/studies', studyController.index);
	/**
	 * @swagger
	 * /api/v1/studies/create:
	 *   get:
	 *     tags:
	 *       - Study
	 *     description: Returns specific viewmodel such as studies
	 *     produces:
	 *       - application/json
	 *     responses:
	 *       200:
	 *         description: Create study
	 */
	parentRouter.get('/studies/create', studyController.create);
	/**
	 * @swagger
	 * /api/v1/studies/{id}:
	 *   get:
	 *     tags:
	 *       - Study
	 *     description: Returns specific study
	 *     produces:
	 *       - application/json
	 *     parameters:
	 *       - name: id
	 *         description: Study id
	 *         in: path
	 *         required: true
	 *         type: string
	 *     responses:
	 *       200:
	 *         description: Get study by id
	 */
	parentRouter.get('/studies/:id', studyController.show);
	/**
	 * @swagger
	 * /api/v1/studies:
	 *   post:
	 *     tags:
	 *       - Study
	 *     description: Save study
	 *     produces:
	 *       - application/json
	 *     parameters:
	 *       - name: study
	 *         description: Study object
	 *         in: body
	 *         required: true
	 *     responses:
	 *       200:
	 *         description: Return saved study
	 */
	parentRouter.post('/studies', studyController.store);
	/**
	 * @swagger
	 * /api/v1/studies/{id}/edit:
	 *   get:
	 *     tags:
	 *       - Study
	 *     description: Returns specific viewmodel such as studies
	 *     produces:
	 *       - application/json
	 *     parameters:
	 *       - name: id
	 *         description: Study id
	 *         in: path
	 *         required: true
	 *         type: string
	 *     responses:
	 *       200:
	 *         description: Edit study by id
	 */
	parentRouter.get('/studies/:id/edit', studyController.edit);
	/**
	 * @swagger
	 * /api/v1/studies/{id}:
	 *   put:
	 *     tags:
	 *       - Study
	 *     description: Update specific study detail
	 *     produces:
	 *       - application/json
	 *     parameters:
	 *       - name: id
	 *         description: Study id
	 *         in: path
	 *         required: true
	 *         type: string
	 *       - name: study object
	 *         description: study data
	 *         in: body
	 *         required: true
	 *     responses:
	 *       200:
	 *         description: Update study
	 */
	parentRouter.put('/studies/:id', studyController.update);
	 /**
	 * @swagger
	 * /api/v1/studies/{id}:
	 *   delete:
	 *     tags:
	 *       - Study
	 *     description: Delete specific study detail
	 *     produces:
	 *       - application/json
	 *     parameters:
	 *       - name: id
	 *         description: Study id
	 *         in: path
	 *         required: true
	 *         type: string
	 *     responses:
	 *       200:
	 *         description: Delete study
	 */
	parentRouter.delete('/studies/:id', studyController.destroy);
}

export default initializeEndpoints;