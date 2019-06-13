/*
Import the external libraries:
- uuidv4
*/

/*
Import the internal libraries:
- * from database
- errorHandler
*/
import { ProjectImage } from '../database';
import { APIError, handleAPIError } from '../../../utilities';

class ProjectImageController {
    // List all the models
    index = async (req, res, next) => {
        try {
            const { limit, skip } = req.query;
            let projectImages = null;
            if (limit && skip) {
                const options = {
                    page: parseInt(skip, 10) || 1,
                    limit: parseInt(limit, 10) || 10,
                    sort: { created_at: -1 },
                };
                projectImages = await ProjectImage.paginate({}, options);
            } else {
                projectImages = await ProjectImage.find().sort({ created_at: -1 }).exec();
            }

            if (projectImages === undefined || projectImages === null) {
                throw new APIError(404, 'Collection for events not found!');
            }
            return res.status(200).json(projectImages);
        } catch (err) {
            return handleAPIError(500, err.message || 'Some error occurred while retrieving events', next);
        }
    };

    // Show specific model by id
    show = async (req, res, next) => {
        try {
            const { id } = req.params;
            const item = await ProjectImage.findById(id).exec();
            if (item === undefined || item === null) {
                throw new APIError(404, `Images from Project: ${id} not found!`);
            }
            return res.status(200).json(item);
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || 'Some error occurred while retrieving event', next);
        }
    }

    // ViewModel for Insert / Create
    create = (req, res) => {
        const vm = {
            projects: [],
        };
        return res.status(200).json(vm);
    }

    // Store / Create the new model
    store = async (req, res, next) => {
        try {
            const projectImageCreate = new ProjectImage({
								title: req.body.title,
								path: req.body.path,
								projectId: req.body.projectId,
            });
            const event = await projectImageCreate.save();
            return res.status(201).json(event);
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || 'Some error occurred while saving the Event!', next);
        }
    }

    // ViewModel for Edit / Update
    edit = async (req, res, next) => {
        const { id } = req.params;

        try {
            const projectImage = await ProjectImage.findById(id).exec();

            if (!projectImage) {
                throw new APIError(404, `Event with id: ${id} not found!`);
            } else {
                const vm = {
                    projectImage,
                    projects: [],
                };
                return res.status(200).json(vm);
            }
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || `Some error occurred while deleting the Event with id: ${id}!`, next);
        }
    }

    // Update the model
    update = async (req, res, next) => {
        const { id } = req.params;

        try {
            const projectImageUpdate = req.body;
            const projectImage = await ProjectImage.findOneAndUpdate({ _id: id }, projectImageUpdate, { new: true }).exec();

            if (!projectImage) {
                throw new APIError(404, `Event with id: ${id} not found!`);
            }
            return res.status(200).json(projectImage);
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || `Some error occurred while deleting the Event with id: ${id}!`, next);
        }
    }

    // Delete / Destroy the model
    destroy = async (req, res, next) => {
        const { id } = req.params;

        try {
            let projectImage = null;

            let { mode } = req.query;
            if (mode) {
                projectImage = await ProjectImage.findByIdAndUpdate({ _id: id }, { deleted_at: (mode === 'softdelete' ? Date.now() : null) }, { new: true });
            } else {
                mode = 'delete';
                projectImage = await ProjectImage.findOneAndRemove({ _id: id });
            }

            if (!projectImage) {
                throw new APIError(404, `Event with id: ${id} not found!`);
            } else {
                return res.status(200).json({ message: `Successful deleted the Event with id: ${id}!`, post: projectImage, mode });
            }
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || `Some error occurred while deleting the Event with id: ${id}!`, next);
        }
    }
}

export default ProjectImageController;
