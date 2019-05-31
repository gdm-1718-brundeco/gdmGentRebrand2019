import { StudyController } from '../controller';

const studyController = new StudyController();

const initializeEndpoints = (parentRouter, authService) => {
	parentRouter.get('/studies', studyController.index);

	parentRouter.get('/studies/create', studyController.create);

	parentRouter.get('/studies/:id', studyController.show);

	parentRouter.post('/studies', studyController.store);

	parentRouter.get('/studies/edit/:id', studyController.edit);

	parentRouter.put('/studies/:id', studyController.update);

	parentRouter.delete('/studies/:id', studyController.destroy);
}

export default initializeEndpoints;