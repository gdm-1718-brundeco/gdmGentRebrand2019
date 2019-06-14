import { TeamController } from '../controller';

const teamController = new TeamController();

const initializeEndpoints = (parentRouter, authService) => {
	parentRouter.get('/team', teamController.index);

	parentRouter.get('/team/create', teamController.create);

	parentRouter.get('/team/:id', teamController.show);

	parentRouter.post('/team', teamController.store);

	parentRouter.get('/team/:id/edit', teamController.edit);

	parentRouter.put('/team/:id', teamController.update);

	parentRouter.delete('/team/:id', teamController.destroy);
}

export default initializeEndpoints;