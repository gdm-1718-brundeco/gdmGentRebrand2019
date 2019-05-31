import { Course } from '../database';
import { APIError, handleAPIError } from '../../../utilities';

class CourseController {
    // List all the models
    index = async (req, res, next) => {
        try {
            const { limit, skip } = req.query;
            let courses = null;
            if (limit && skip) {
                const options = {
                    page: parseInt(skip, 10) || 1,
										limit: parseInt(limit, 10) || 10,
										populate: ['teachers', 'study', 'mainCourse', 'subCourses'],
                    sort: { created_at: -1 },
                };
                courses = await Course.paginate({}, options);
            } else {
                courses = await Course.find().populate(['teachers', 'study', 'mainCourse', 'subCourses']).sort({ created_at: -1 }).exec();
            }

            if (courses === undefined || courses === null) {
                throw new APIError(404, 'Collection for studies not found!');
            }
            return res.status(200).json(courses);
        } catch (err) {
            return handleAPIError(500, err.message || 'Some error occurred while retrieving studies', next);
        }
    };

    // Show specific model by id
    show = async (req, res, next) => {
        try {
            const { id } = req.params;
            const item = await Course.findById(id).exec();
            if (item === undefined || item === null) {
                throw new APIError(404, `Study with id: ${id} not found!`);
            }
            return res.status(200).json(item);
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || 'Some error occurred while retrieving studies', next);
        }
    }

    // ViewModel for Insert / Create
    create = (req, res) => {
        const vm = {
            categories: [],
        };
        return res.status(200).json(vm);
    }

    // Store / Create the new model
    store = async (req, res, next) => {
        try {
            const courseCreate = new Course({
								name: req.body.name,
								description: req.body.description,
								points: req.body.points,
								teacherIds: req.body.teacherIds,
								studyIds: req.body.studyIds,
								parentCourseId: req.body.parentCourseId,
            });
            const course = await courseCreate.save();
            return res.status(201).json(course);
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || 'Some error occurred while saving the Study!', next);
        }
    }

    // ViewModel for Edit / Update
    edit = async (req, res, next) => {
        const { id } = req.params;

        try {
            const course = await Course.findById(id).exec();

            if (!course) {
                throw new APIError(404, `Study with id: ${id} not found!`);
            } else {
                const vm = {
                    course,
                    studies: [],
                };
                return res.status(200).json(vm);
            }
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || `Some error occurred while deleting the Study with id: ${id}!`, next);
        }
    }

    // Update the model
    update = async (req, res, next) => {
        const { id } = req.params;

        try {
            const courseUpdate = req.body;
            const course = await Course.findOneAndUpdate({ _id: id }, courseUpdate, { new: true }).exec();

            if (!course) {
                throw new APIError(404, `Study with id: ${id} not found!`);
            }
            return res.status(200).json(course);
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || `Some error occurred while deleting the Study with id: ${id}!`, next);
        }
    }

    // Delete / Destroy the model
    destroy = async (req, res, next) => {
        const { id } = req.params;

        try {
            const course = await Course.findOneAndRemove({ _id: id });

            if (!course) {
                throw new APIError(404, `Study with id: ${id} not found!`);
            } else {
                return res.status(200).json({ message: `Successful deleted the Study with id: ${id}!` });
            }
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || `Some error occurred while deleting the Study with id: ${id}!`, next);
        }
    }
}

export default CourseController;
