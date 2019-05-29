import { Project } from '../database';
import { APIError, handleAPIError } from '../../../utilities';

class ProjectController {
	index = async (req, res, next) => {
		try {
			const { limit, skip } = req.query;
			let projects = null;

			if (limit && skip) {
				const options = {
					page: parseInt(skip, 10) || 1,
					limit: parseInt(limit, 10) || 10,
					populate: ['images', 'category'],
					sort: { created_at: -1 },
				};
				projects = await Project.paginate({}, options);
			} else {
				projects = await Project.find().populate(['category', 'images']).sort({ created_at: -1 }).exec();
			}

			if( projects === undefined || projects === null) {
				throw new APIError(404, 'Collection for projects not found');
			}

			return res.status(200).json(projects);
		} catch (err) {
			return handleAPIError(500, err.message || 'Some error occured while retrieving posts', next);
		}
	};

	show = async (req, res, next) => {
		try {
			const { id } = req.params;
			const item = await Project.findById(id).populate(['category', 'images']).exec();

			if (item === undefined || item === null) {
				throw new APIError(404, `Project with id ${id} not found`);
			}
			return res.status(200).json(item);
		} catch (err) {
			return handleAPIError(err.status || 500, err.message || 'Something went wrong while retrieving posts', next);
		}
	}

	create = async (req, res, next) => {
		const vm = {
			categories: [],
		};
		return res.status(200).json(vm);
	}

	store = async (req, res, next) => {
		try {
			const projectCreate = new Project({
				title: req.body.title,
				synopsis: req.body.synopsis,
				body: req.body.body,
				categoryId: req.body.categoryId,
			});
			const project = await projectCreate.save();
			return res.status(201).json(project);
		} catch (err) {
			return handleAPIError(err.status || 500, err.message || 'Something went wrong while saving the Project.', next);
		}
	}

	edit = async (req, res, next) => {
		const { id } = req.params;

		try {
			const project = await Project.findById(id).exec();

			if(!project) {
				throw new APIError(404, `Project with id: ${id} not found.`);
			} else {
				const vm = {
					post,
					categories: [],
				};
				return res.status(200).json(vm);
			}
		} catch (err) {
			return handleAPIError(err.status || 500, err.message || `Some error occured while editing the Project with id: ${id}`, next);
		}
	}

	update = async (req, res, next) => {
		const { id } = req.params;

		try {
			const projectUpdate = req.body;
			const project = await Project.findOneAndUpdate({ _id: id }, projectUpdate, { new: true }).exec();

			if (!project) {
				throw new APIError(404, `Post with id: ${id} not found.`);
			}
			return res.status(200).json(project);
		} catch(err) {
			return handleAPIError(err.status || 500, err.message || `Some error occured while updating the post with id: ${id}`);
		}
	}

	destroy = async (req, res, next) => {
		const { id } = req.params;

		try {
			let project = null;
			let { mode } = req.query;

			if(mode) {
				project = await Project.findByIdAndUpdate({ _id: id }, { deleted_at: (mode === 'softDelete' ? Date.now() : null)} , { new: true });
			} else {
				mode = 'delete';
				project = await Project.findByIdAndRemove({ _id: id });
			}

			if(!project) {
				throw new APIError(404, `Project with id: ${id} not found.`);
			} else {
				return res.status(200).json({ message: `Successfully deleted the Project with id: ${id}.`, post, mode });
			}
		} catch (err) {
			return handleAPIError(err.status || 500, err.message || `Some error occured while deleting Project with id: ${project}.`, next);
		}
	}
}

export default ProjectController;