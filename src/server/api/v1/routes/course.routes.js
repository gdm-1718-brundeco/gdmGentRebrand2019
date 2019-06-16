import { CourseController } from '../controller';

const courseController = new CourseController();

const initializeEndpoints = (parentRouter, authService) => {
	/**
	 * @swagger
	 * /api/v1/courses:
	 *   get:
	 *     tags:
	 *       - Courses
	 *     description: Returns all courses
	 *     produces:
	 *       - application/json
	 *     responses:
	 *       200:
	 *         description: An array of courses
     */
	parentRouter.get('/courses', courseController.index);
	/**
	 * @swagger
	 * /api/v1/courses/create:
	 *   get:
	 *     tags:
	 *       - Course
	 *     description: Returns specific viewmodel such as courses
	 *     produces:
	 *       - application/json
	 *     responses:
	 *       200:
	 *         description: Create course
	 */
	parentRouter.get('/courses/create', courseController.create);
	/**
	 * @swagger
	 * /api/v1/courses/{id}:
	 *   get:
	 *     tags:
	 *       - Course
	 *     description: Returns specific course
	 *     produces:
	 *       - application/json
	 *     parameters:
	 *       - name: id
	 *         description: Course id
	 *         in: path
	 *         required: true
	 *         type: string
	 *     responses:
	 *       200:
	 *         description: Get course by id
	 */
	parentRouter.get('/courses/:id', courseController.show);
	/**
	 * @swagger
	 * /api/v1/courses:
	 *   post:
	 *     tags:
	 *       - Course
	 *     description: Save course
	 *     produces:
	 *       - application/json
	 *     parameters:
	 *       - name: course
	 *         description: Course object
	 *         in: body
	 *         required: true
	 *     responses:
	 *       200:
	 *         description: Return saved course
	 */
	parentRouter.post('/courses', courseController.store);
	/**
     * @swagger
     * /api/v1/courses/{id}/edit:
     *   get:
     *     tags:
     *       - Course
     *     description: Returns specific viewmodel such as post, courses
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         description: Course id
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Edit post by id
     */
	parentRouter.get('/courses/:id/edit', courseController.edit);
	/**
	 * @swagger
	 * /api/v1/courses/{id}:
	 *   put:
	 *     tags:
	 *       - Course
	 *     description: Update specific course detail
	 *     produces:
	 *       - application/json
	 *     parameters:
	 *       - name: id
	 *         description: Course id
	 *         in: path
	 *         required: true
	 *         type: string
	 *       - name: course object
	 *         description: course data
	 *         in: body
	 *         required: true
	 *     responses:
	 *       200:
	 *         description: Update course
	 */
	parentRouter.put('/courses/:id', courseController.update);
	/**
	 * @swagger
	 * /api/v1/courses/{id}:
	 *   delete:
	 *     tags:
	 *       - Course
	 *     description: Delete specific course detail
	 *     produces:
	 *       - application/json
	 *     parameters:
	 *       - name: id
	 *         description: Course id
	 *         in: path
	 *         required: true
	 *         type: string
	 *     responses:
	 *       200:
	 *         description: Delete course
	 */
	parentRouter.delete('/courses/:id', courseController.destroy);
}

export default initializeEndpoints;