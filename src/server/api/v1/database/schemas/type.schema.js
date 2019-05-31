import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
import slug from 'slug';

const { Schema } = mongoose;

const TypeSchema = new Schema(
	{
		name: { type: String, required: true, max: 128 },
		description: { type: String, required: true, max: 512 },
		slug: { type: String, lowercase: true, unique: true, required: true },
		deleted_at: { type: Date, required: false },
	},
	{
		toJSON: { virtuals: true },
		toObject: { virtuals: true },
	},
	{
		timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
	},
);

TypeSchema.methods.slugify = function () {
	this.slug = slug(this.name);
}

TypeSchema.pre('validate', function (next) {
	if (!this.slug) {
		this.slugify();
	}
	return next();
});

TypeSchema.virtual('id').get(function() { return this._id });

TypeSchema.plugin(mongoosePaginate);
export default mongoose.model('Type', TypeSchema);