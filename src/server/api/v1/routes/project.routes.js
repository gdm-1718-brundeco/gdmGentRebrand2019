import { ProjectController } from '../controller';

const projectController = new ProjectController();

const initializeEndpoints = (parentRouter, authService) => {
	parentRouter.get('/projects', projectController.index);

	parentRouter.get('/projects/create', projectController.create);

	parentRouter.get('/projects/:id', projectController.show);

	parentRouter.post('/projects', projectController.store);

	parentRouter.get('/projects/:id/edit', projectController.edit);

	parentRouter.put('/projects/:id', projectController.update);

	parentRouter.delete('/projects/:id', projectController.destroy);
}

export default initializeEndpoints;