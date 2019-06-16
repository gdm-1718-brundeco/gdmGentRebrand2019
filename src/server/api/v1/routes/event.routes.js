import { EventController } from '../controller';

const eventController = new EventController();

const initializeEndpoints = (parentRouter, authService) => {
	/**
	 * @swagger
	 * /api/v1/events:
	 *   get:
	 *     tags:
	 *       - Events
	 *     description: Returns all events
	 *     produces:
	 *       - application/json
	 *     responses:
	 *       200:
	 *         description: An array of events
	 */
	parentRouter.get('/events', eventController.index);
	/**
	 * @swagger
	 * /api/v1/events/create:
	 *   get:
	 *     tags:
	 *       - Event
	 *     description: Returns specific viewmodel such as events
	 *     produces:
	 *       - application/json
	 *     responses:
	 *       200:
	 *         description: Create event
	 */
	parentRouter.get('/events/create', eventController.create);
	/**
	 * @swagger
	 * /api/v1/events/{id}:
	 *   get:
	 *     tags:
	 *       - Event
	 *     description: Returns specific event
	 *     produces:
	 *       - application/json
	 *     parameters:
	 *       - name: id
	 *         description: Event id
	 *         in: path
	 *         required: true
	 *         type: string
	 *     responses:
	 *       200:
	 *         description: Get event by id
	 */
	parentRouter.get('/events/:id', eventController.show);
	/**
	 * @swagger
	 * /api/v1/events:
	 *   post:
	 *     tags:
	 *       - Event
	 *     description: Save event
	 *     produces:
	 *       - application/json
	 *     parameters:
	 *       - name: event
	 *         description: Event object
	 *         in: body
	 *         required: true
	 *     responses:
	 *       200:
	 *         description: Return saved event
	 */
	parentRouter.post('/events', eventController.store);
	/**
	 * @swagger
	 * /api/v1/events/{id}/edit:
	 *   get:
	 *     tags:
	 *       - Event
	 *     description: Returns specific viewmodel such as event, events
	 *     produces:
	 *       - application/json
	 *     parameters:
	 *       - name: id
	 *         description: Event id
	 *         in: path
	 *         required: true
	 *         type: string
	 *     responses:
	 *       200:
	 *         description: Edit event by id
	 */
	parentRouter.get('/events/:id/edit', eventController.edit);
	/**
	 * @swagger
	 * /api/v1/events/{id}:
	 *   put:
	 *     tags:
	 *       - Event
	 *     description: Update specific event detail
	 *     produces:
	 *       - application/json
	 *     parameters:
	 *       - name: id
	 *         description: Event id
	 *         in: path
	 *         required: true
	 *         type: string
	 *       - name: event object
	 *         description: event data
	 *         in: body
	 *         required: true
	 *     responses:
	 *       200:
	 *         description: Update event
	 */
	parentRouter.put('/events/:id', eventController.update);
	/**
	 * @swagger
	 * /api/v1/events/{id}:
	 *   delete:
	 *     tags:
	 *       - Event
	 *     description: Delete specific event detail
	 *     produces:
	 *       - application/json
	 *     parameters:
	 *       - name: id
	 *         description: Event id
	 *         in: path
	 *         required: true
	 *         type: string
	 *     responses:
	 *       200:
	 *         description: Delete event
	 */
	parentRouter.delete('/events/:id', eventController.destroy);
}

export default initializeEndpoints;