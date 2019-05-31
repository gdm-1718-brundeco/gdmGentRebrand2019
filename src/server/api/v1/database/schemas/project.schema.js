import mongoose from 'mongoose';
import mongoossePaginate from 'mongoose-paginate';
import slug from 'slug';

const { Schema } = mongoose;

const ProjectSchema = new Schema(
	{
		title: { type: String, required: true, max: 128 },
		synopsis: { type: String, required: true, max: 1024 },
		body: { type: String, required: true },
		slug: {
			type: String, lowercase: true, unique: true, required: true,
		},
		creator: { type: String, required: true, max: 128 },
		published_at: { type: Date, required: false },
		deleted_at: { type: Date, required: false },
		categoryId: { type: Schema.Types.ObjectId, ref: 'Category', required: false },
		images: [{ type: Schema.Types.ObjectId, ref: 'ProjectImage', required: true }]
	},
	{
		toJSON: { virtuals: true },
		toObject: { virtuals: true },
	},
	{
		timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
	}
);

ProjectSchema.methods.slugify = function () {
	this.slug = slug(this.title);
};

ProjectSchema.pre('validate', function (next) {
	if (!this.slug) {
		this.slugify();
	}
	return next();
});

ProjectSchema.virtual('id').get(function () { return this._id });
ProjectSchema.virtual('category', {
	ref: 'Category',
	localField: 'categoryId',
	foreignField: '_id',
	justOne: true,
});

ProjectSchema.plugin(mongoossePaginate);
export default mongoose.model('Project', ProjectSchema)