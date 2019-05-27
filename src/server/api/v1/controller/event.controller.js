/*
Import the external libraries:
- uuidv4
*/

/*
Import the internal libraries:
- * from database
- errorHandler
*/
import { Event } from '../database';
import { APIError, handleAPIError } from '../../../utilities';

class EventController {
    // List all the models
    index = async (req, res, next) => {
        try {
            const { limit, skip } = req.query;
            let events = null;
            if (limit && skip) {
                const options = {
                    page: parseInt(skip, 10) || 1,
                    limit: parseInt(limit, 10) || 10,
                    populate: 'category',
                    sort: { created_at: -1 },
                };
                events = await Event.paginate({}, options);
            } else {
                events = await Event.find().sort({ created_at: -1 }).exec();
            }

            if (events === undefined || events === null) {
                throw new APIError(404, 'Collection for events not found!');
            }
            return res.status(200).json(events);
        } catch (err) {
            return handleAPIError(500, err.message || 'Some error occurred while retrieving events', next);
        }
    };

    // Show specific model by id
    show = async (req, res, next) => {
        try {
            const { id } = req.params;
            const item = await Event.findById(id).exec();
            if (item === undefined || item === null) {
                throw new APIError(404, `Event with id: ${id} not found!`);
            }
            return res.status(200).json(item);
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || 'Some error occurred while retrieving event', next);
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
            const eventCreate = new Event({
                title: req.body.title,
                body: req.body.body,
                event_date: req.body.event_date,
            });
            const event = await eventCreate.save();
            return res.status(201).json(event);
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || 'Some error occurred while saving the Event!', next);
        }
    }

    // ViewModel for Edit / Update
    edit = async (req, res, next) => {
        const { id } = req.params;

        try {
            const event = await Event.findById(id).exec();

            if (!event) {
                throw new APIError(404, `Event with id: ${id} not found!`);
            } else {
                const vm = {
                    event,
                    categories: [],
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
            const eventUpdate = req.body;
            const event = await Event.findOneAndUpdate({ _id: id }, eventUpdate, { new: true }).exec();

            if (!event) {
                throw new APIError(404, `Event with id: ${id} not found!`);
            }
            return res.status(200).json(event);
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || `Some error occurred while deleting the Event with id: ${id}!`, next);
        }
    }

    // Delete / Destroy the model
    destroy = async (req, res, next) => {
        const { id } = req.params;

        try {
            let event = null;

            let { mode } = req.query;
            if (mode) {
                event = await Event.findByIdAndUpdate({ _id: id }, { deleted_at: (mode === 'softdelete' ? Date.now() : null) }, { new: true });
            } else {
                mode = 'delete';
                event = await Event.findOneAndRemove({ _id: id });
            }

            if (!event) {
                throw new APIError(404, `Event with id: ${id} not found!`);
            } else {
                return res.status(200).json({ message: `Successful deleted the Event with id: ${id}!`, post: event, mode });
            }
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || `Some error occurred while deleting the Event with id: ${id}!`, next);
        }
    }
}

export default EventController;
