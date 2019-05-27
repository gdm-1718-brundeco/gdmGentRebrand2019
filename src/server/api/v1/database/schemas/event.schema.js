import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
import slug from 'slug';

const { Schema } = mongoose;

const EventSchema = new Schema(
	{
		title: { type: String, required: true, max: 128 },
		body: { type: String, required: false },
		event_date: { type: Date, required: true },
		slug: { type: String, lowercarse: true, unique: true, required: true},
		deleted_at: { type: Date, required: false },
	},
	{
		toJSON: { virtuals: true },
		toObject: { virtuals: true },
	},
	{
		timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
	}
);

EventSchema.methods.slugify = function() {
	this.slug = slug(this.title);
};

EventSchema.pre('validate', function (next) {
	if (!this.slug) {
		this.slugify();
	}

	return next();
});

EventSchema.virtual('id').get(function() { return this._id });

EventSchema.plugin(mongoosePaginate);
export default mongoose.model('Event', EventSchema);