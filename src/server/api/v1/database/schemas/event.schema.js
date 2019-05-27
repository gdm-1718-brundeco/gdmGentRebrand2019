import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
import slug from 'slug';

const { Schema } = mongoose;

const EventSchema = new Schema(
	{
		title: { type: String, required: true, max: 128 },
		body: { type: String, required: false },
		slug: {}
	}
)