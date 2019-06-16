import { Study } from '../database';
import { APIError, handleAPIError } from '../../../utilities';

class StudyController {
    // List all the models
    index = async (req, res, next) => {
        try {
            const { limit, skip } = req.query;
            let studies = null;
            if (limit && skip) {
                const options = {
                    page: parseInt(skip, 10) || 1,
										limit: parseInt(limit, 10) || 10,
                    sort: { created_at: -1 },
                };
                studies = await Study.paginate({}, options);
            } else {
                studies = await Study.find().sort({ created_at: -1 }).exec();
            }

            if (studies === undefined || studies === null) {
                throw new APIError(404, 'Collection for studies not found!');
            }
            return res.status(200).json(studies);
        } catch (err) {
            return handleAPIError(500, err.message || 'Some error occurred while retrieving studies', next);
        }
    };

    // Show specific model by id
    show = async (req, res, next) => {
        try {
            const { id } = req.params;
            const item = await Study.findById(id).exec();
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
            const studyCreate = new Study({
								name: req.body.name,
								description: req.body.description,
								parentStudyId: req.body.parentStudyId,
            });
            const study = await studyCreate.save();
            return res.status(201).json(study);
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || 'Some error occurred while saving the Study!', next);
        }
    }

    // ViewModel for Edit / Update
    edit = async (req, res, next) => {
        const { id } = req.params;

        try {
            const study = await Study.findById(id).exec();

            if (!study) {
                throw new APIError(404, `Study with id: ${id} not found!`);
            } else {
                const vm = {
                    study,
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
            const studyUpdate = req.body;
            const study = await Study.findOneAndUpdate({ _id: id }, studyUpdate, { new: true }).exec();

            if (!study) {
                throw new APIError(404, `Study with id: ${id} not found!`);
            }
            return res.status(200).json(study);
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || `Some error occurred while deleting the Study with id: ${id}!`, next);
        }
    }

    // Delete / Destroy the model
    destroy = async (req, res, next) => {
        const { id } = req.params;

        try {
            const study = await Study.findOneAndRemove({ _id: id });
            
            if (!study) {
                throw new APIError(404, `Study with id: ${id} not found!`);
            } else {
                return res.status(200).json({ message: `Successful deleted the Study with id: ${id}!` });
            }
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || `Some error occurred while deleting the Study with id: ${id}!`, next);
        }
    }
}

export default StudyController;
