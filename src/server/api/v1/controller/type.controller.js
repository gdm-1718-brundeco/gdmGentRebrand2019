import { Type } from '../database';
import { APIError, handleAPIError } from '../../../utilities';

class TypeController {
    // List all the models
    index = async (req, res, next) => {
        try {
            const { limit, skip } = req.query;
            let types = null;
            if (limit && skip) {
                const options = {
                    page: parseInt(skip, 10) || 1,
                    limit: parseInt(limit, 10) || 10,
                    sort: { created_at: -1 },
                };
                types = await Type.paginate({}, options);
            } else {
                types = await Type.find().sort({ created_at: -1 }).exec();
            }

            if (types === undefined || types === null) {
                throw new APIError(404, 'Collection for types not found!');
            }
            return res.status(200).json(types);
        } catch (err) {
            return handleAPIError(500, err.message || 'Some error occurred while retrieving types', next);
        }
    };

    // Show specific model by id
    show = async (req, res, next) => {
        try {
            const { id } = req.params;
            const item = await Type.findById(id).exec();
            if (item === undefined || item === null) {
                throw new APIError(404, `Type with id: ${id} not found!`);
            }
            return res.status(200).json(item);
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || 'Some error occurred while retrieving types', next);
        }
    }

    // ViewModel for Insert / Create
    create = (req, res) => {
        const vm = {
            types: [],
        };
        return res.status(200).json(vm);
    }

    // Store / Create the new model
    store = async (req, res, next) => {
        try {
            const typeCreate = new Type({
								name: req.body.name,
								description: req.body.description,
            });
            const type = await typeCreate.save();
            return res.status(201).json(type);
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || 'Some error occurred while saving the Type!', next);
        }
    }

    // ViewModel for Edit / Update
    edit = async (req, res, next) => {
        const { id } = req.params;

        try {
            const type = await Type.findById(id).exec();

            if (!type) {
                throw new APIError(404, `Type with id: ${id} not found!`);
            } else {
                const vm = {
                    type,
                    types: [],
                };
                return res.status(200).json(vm);
            }
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || `Some error occurred while deleting the Type with id: ${id}!`, next);
        }
    }

    // Update the model
    update = async (req, res, next) => {
        const { id } = req.params;

        try {
            const typeUpdate = req.body;
            const type = await Type.findOneAndUpdate({ _id: id }, typeUpdate, { new: true }).exec();

            if (!type) {
                throw new APIError(404, `Type with id: ${id} not found!`);
            }
            return res.status(200).json(type);
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || `Some error occurred while deleting the Type with id: ${id}!`, next);
        }
    }

    // Delete / Destroy the model
    destroy = async (req, res, next) => {
        const { id } = req.params;

        try {
            const type = await Type.findOneAndRemove({ _id: id });
            
            if (!type) {
                throw new APIError(404, `Type with id: ${id} not found!`);
            } else {
                return res.status(200).json({ message: `Successful deleted the Type with id: ${id}!` });
            }
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || `Some error occurred while deleting the Type with id: ${id}!`, next);
        }
    }
}

export default TypeController;
