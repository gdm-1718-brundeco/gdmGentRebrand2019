import { TypeController } from '../controller';

const typeController = new TypeController();

const initializeEndpoints = (parentRouter, authService) => {
	parentRouter.get('/types', typeController.index);

	parentRouter.get('/types/create', typeController.create);

	parentRouter.get('/types/:id', typeController.show);

	parentRouter.post('/types', typeController.store);

	parentRouter.get('/types/edit/:id', typeController.edit);

	parentRouter.put('/types/:id', typeController.update);

	parentRouter.delete('/types/:id', typeController.destroy);
}

export default initializeEndpoints;