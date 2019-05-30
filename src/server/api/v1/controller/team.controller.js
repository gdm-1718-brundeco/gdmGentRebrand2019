import { Team } from '../database';
import { APIError, handleAPIError } from '../../../utilities';

class TeamController {
	index = async (req, res, next) => {
		try {
			const { limit, skip } = req.query;
			let team = null;

			if (limit && skip) {
				const options = {
					page: parseInt(skip, 10) || 1,
					limit: parseInt(limit, 10) || 10,
					populate: ['images', 'category'],
					sort: { created_at: -1 },
				};
				team = await Team.paginate({}, options);
			} else {
				team = await Team.find().populate(['category', 'images']).sort({ created_at: -1 }).exec();
			}

			if( team === undefined || team === null) {
				throw new APIError(404, 'Collection for projects not found');
			}

			return res.status(200).json(team);
		} catch (err) {
			return handleAPIError(500, err.message || 'Some error occured while retrieving posts', next);
		}
	};

	show = async (req, res, next) => {
		try {
			const { id } = req.params;
			const item = await Team.findById(id).populate(['category', 'images']).exec();

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
			const teamCreate = new Team({
				first_name: req.body.first_name,
				last_name: req.body.last_name,
				job: req.body.job,
				quotes: req.body.quotes,
			});
			const team = await teamCreate.save();
			return res.status(201).json(team);
		} catch (err) {
			return handleAPIError(err.status || 500, err.message || 'Something went wrong while saving the Project.', next);
		}
	}

	edit = async (req, res, next) => {
		const { id } = req.params;

		try {
			const project = await Team.findById(id).exec();

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
			const teamUpdate = req.body;
			const team = await Team.findOneAndUpdate({ _id: id }, teamUpdate, { new: true }).exec();

			if (!team) {
				throw new APIError(404, `Post with id: ${id} not found.`);
			}
			return res.status(200).json(team);
		} catch(err) {
			return handleAPIError(err.status || 500, err.message || `Some error occured while updating the post with id: ${id}`);
		}
	}

	destroy = async (req, res, next) => {
		const { id } = req.params;

		try {
			let team = null;
			let { mode } = req.query;

			if(mode) {
				team = await Team.findByIdAndUpdate({ _id: id }, { deleted_at: (mode === 'softDelete' ? Date.now() : null)} , { new: true });
			} else {
				mode = 'delete';
				team = await Team.findByIdAndRemove({ _id: id });
			}

			if(!team) {
				throw new APIError(404, `Project with id: ${id} not found.`);
			} else {
				return res.status(200).json({ message: `Successfully deleted the Project with id: ${id}.`, post, mode });
			}
		} catch (err) {
			return handleAPIError(err.status || 500, err.message || `Some error occured while deleting Project with id: ${project}.`, next);
		}
	}
}

export default TeamController;