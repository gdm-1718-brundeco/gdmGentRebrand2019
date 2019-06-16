import { Testimonial } from '../database';
import { APIError, handleAPIError } from '../../../utilities';

class TestimonialController {
	index = async (req, res, next) => {
		try {
			const { limit, skip } = req.query;
			let testimonial = null;

			if (limit && skip) {
				const options = {
					page: parseInt(skip, 10) || 1,
					limit: parseInt(limit, 10) || 10,
					populate: 'type',
					sort: { created_at: -1 },
				};
				testimonial = await Testimonial.paginate({}, options);
			} else {
				testimonial = await Testimonial.find().populate('type').sort({ created_at: -1 }).exec();
			}

			if( testimonial === undefined || testimonial === null) {
				throw new APIError(404, 'Collection for projects not found');
			}

			return res.status(200).json(testimonial);
		} catch (err) {
			return handleAPIError(500, err.message || 'Some error occured while retrieving posts', next);
		}
	};

	show = async (req, res, next) => {
		try {
			const { id } = req.params;
			const item = await Testimonial.findById(id).populate('type').exec();

			if (item === undefined || item === null) {
				throw new APIError(404, `Testimonial with id ${id} not found`);
			}
			return res.status(200).json(item);
		} catch (err) {
			return handleAPIError(err.status || 500, err.message || 'Something went wrong while retrieving posts', next);
		}
	}

	create = async (req, res, next) => {
		const vm = {
			types: [],
		};
		return res.status(200).json(vm);
	}

	store = async (req, res, next) => {
		try {
			const testimonialCreate = new Testimonial({
				subject: req.body.subject,
				name: req.body.name,
				typeId: req.body.typeId,
				body: req.body.body,
				image: req.body.image,
			});
			const testimonial = await testimonialCreate.save();
			return res.status(201).json(testimonial);
		} catch (err) {
			return handleAPIError(err.status || 500, err.message || 'Something went wrong while saving the Project.', next);
		}
	}

	edit = async (req, res, next) => {
		const { id } = req.params;

		try {
			const testimonial = await Testimonial.findById(id).exec();

			if(!testimonial) {
				throw new APIError(404, `Testimonial with id: ${id} not found.`);
			} else {
				const vm = {
					post,
					types: [],
				};
				return res.status(200).json(vm);
			}
		} catch (err) {
			return handleAPIError(err.status || 500, err.message || `Some error occured while editing the Testimonial with id: ${id}`, next);
		}
	}

	update = async (req, res, next) => {
		const { id } = req.params;

		try {
			const testimonialUpdate = req.body;
			const testimonial = await Testimonial.findOneAndUpdate({ _id: id }, testimonialUpdate, { new: true }).exec();

			if (!testimonial) {
				throw new APIError(404, `Post with id: ${id} not found.`);
			}
			return res.status(200).json(testimonial);
		} catch(err) {
			return handleAPIError(err.status || 500, err.message || `Some error occured while updating the post with id: ${id}`);
		}
	}

	destroy = async (req, res, next) => {
		const { id } = req.params;

		try {
			let testimonial = null;
			let { mode } = req.query;

			if(mode) {
				testimonial = await Testimonial.findByIdAndUpdate({ _id: id }, { deleted_at: (mode === 'softDelete' ? Date.now() : null)} , { new: true });
			} else {
				mode = 'delete';
				testimonial = await Testimonial.findByIdAndRemove({ _id: id });
			}

			if(!testimonial) {
				throw new APIError(404, `Testimonial with id: ${id} not found.`);
			} else {
				return res.status(200).json({ message: `Successfully deleted the Testimonial with id: ${id}.`, testimonial, mode });
			}
		} catch (err) {
			return handleAPIError(err.status || 500, err.message || `Some error occured while deleting Testimonial with id: ${project}.`, next);
		}
	}
}

export default TestimonialController;