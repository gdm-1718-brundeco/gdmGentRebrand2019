import { TeamController } from '../controller';

const teamController = new TeamController();

const initializeEndpoints = (parentRouter, authService) => {
	/**
	 * @swagger
	 * /api/v1/team:
	 *   get:
	 *     tags:
	 *       - Team
	 *     description: Returns all team
	 *     produces:
	 *       - application/json
	 *     responses:
	 *       200:
	 *         description: An array of team
	 */
	parentRouter.get('/team', teamController.index);
	/**
	 * @swagger
	 * /api/v1/team/create:
	 *   get:
	 *     tags:
	 *       - Team
	 *     description: Returns specific viewmodel such as team
	 *     produces:
	 *       - application/json
	 *     responses:
	 *       200:
	 *         description: Create team
	 */
	parentRouter.get('/team/create', teamController.create);
	/**
	 * @swagger
	 * /api/v1/team/{id}:
	 *   get:
	 *     tags:
	 *       - Team
	 *     description: Returns specific team
	 *     produces:
	 *       - application/json
	 *     parameters:
	 *       - name: id
	 *         description: Team id
	 *         in: path
	 *         required: true
	 *         type: string
	 *     responses:
	 *       200:
	 *         description: Get team by id
	 */
	parentRouter.get('/team/:id', teamController.show);
	/**
	 * @swagger
	 * /api/v1/team:
	 *   post:
	 *     tags:
	 *       - Team
	 *     description: Save team
	 *     produces:
	 *       - application/json
	 *     parameters:
	 *       - name: team
	 *         description: Team object
	 *         in: body
	 *         required: true
	 *     responses:
	 *       200:
	 *         description: Return saved team
	 */
	parentRouter.post('/team', teamController.store);
	/**
	 * @swagger
	 * /api/v1/team/{id}/edit:
	 *   get:
	 *     tags:
	 *       - Team
	 *     description: Returns specific viewmodel such as team
	 *     produces:
	 *       - application/json
	 *     parameters:
	 *       - name: id
	 *         description: Team id
	 *         in: path
	 *         required: true
	 *         type: string
	 *     responses:
	 *       200:
	 *         description: Edit team by id
	 */
	parentRouter.get('/team/:id/edit', teamController.edit);
	/**
	 * @swagger
	 * /api/v1/team/{id}:
	 *   put:
	 *     tags:
	 *       - Team
	 *     description: Update specific team detail
	 *     produces:
	 *       - application/json
	 *     parameters:
	 *       - name: id
	 *         description: Team id
	 *         in: path
	 *         required: true
	 *         type: string
	 *       - name: team object
	 *         description: team data
	 *         in: body
	 *         required: true
	 *     responses:
	 *       200:
	 *         description: Update team
	 */
	parentRouter.put('/team/:id', teamController.update);
	/**
	 * @swagger
	 * /api/v1/team/{id}:
	 *   delete:
	 *     tags:
	 *       - Team
	 *     description: Delete specific team detail
	 *     produces:
	 *       - application/json
	 *     parameters:
	 *       - name: id
	 *         description: Team id
	 *         in: path
	 *         required: true
	 *         type: string
	 *     responses:
	 *       200:
	 *         description: Delete team
	 */
	parentRouter.delete('/team/:id', teamController.destroy);
}

export default initializeEndpoints;