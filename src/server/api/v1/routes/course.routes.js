import { CourseController } from '../controller';

const courseController = new CourseController();

const initializeEndpoints = (parentRouter, authService) => {
	parentRouter.get('/courses', courseController.index);

	parentRouter.get('/courses/create', courseController.create);

	parentRouter.get('/courses/:id', courseController.show);

	parentRouter.post('/courses', courseController.store);

	parentRouter.get('/courses/edit/:id', courseController.edit);

	parentRouter.put('/courses/:id', courseController.update);

	parentRouter.delete('/courses/:id', courseController.destroy);
}

export default initializeEndpoints;