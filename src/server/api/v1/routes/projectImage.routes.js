import { ProjectImageController } from '../controller';

const projectImageController = new ProjectImageController();

const initializeEndpoints = (parentRouter, authService) => {
	parentRouter.get('/projectimages', projectImageController.index);

	parentRouter.get('/projectimages/create', projectImageController.create);

	parentRouter.get('/projectimages/:id', projectImageController.show);

	parentRouter.post('/projectimages', projectImageController.store);

	parentRouter.get('/projectimages/edit/:id', projectImageController.edit);

	parentRouter.put('/projectimages/:id', projectImageController.update);

	parentRouter.delete('/projectimages/:id', projectImageController.destroy);
}

export default initializeEndpoints;