import { EventController } from '../controller';

const eventController = new EventController();

const initializeEndpoints = (parentRouter, authService) => {
	parentRouter.get('/events', eventController.index);

	parentRouter.get('/events/create', eventController.create);

	parentRouter.get('/events/:id', eventController.show);

	parentRouter.post('/events', eventController.store);

	parentRouter.get('/events/edit/:id', eventController.edit);

	parentRouter.put('/events/:id', eventController.update);

	parentRouter.delete('/events/:id', eventController.destroy);
}

export default initializeEndpoints;