import { TestimonialController } from '../controller';

const testimonialController = new TestimonialController();

const initializeEndpoints = (parentRouter, authService) => {
	parentRouter.get('/testimonials', testimonialController.index);

	parentRouter.get('/testimonials/create', testimonialController.create);

	parentRouter.get('/testimonials/:id', testimonialController.show);

	parentRouter.post('/testimonials', testimonialController.store);

	parentRouter.get('/testimonials/edit/:id', testimonialController.edit);

	parentRouter.put('/testimonials/:id', testimonialController.update);

	parentRouter.delete('/testimonials/:id', testimonialController.destroy);
}

export default initializeEndpoints;