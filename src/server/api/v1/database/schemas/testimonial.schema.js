import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
import slug from 'slug';

const { Schema } = mongoose;

const TestimonialSchema = new Schema (
	{
		subject: { type: String, required: true, max: 128 },
		name: { type: String, required: true, max: 128 },
		typeId: { type: Schema.Types.ObjectId, ref: 'UserType', required: true, },
		body: { type: String, required: true },
		slug: { type: String, lowercase: true, unique: true, required: true },
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

TestimonialSchema.methods.slugify = function() {
	this.slug = slug(this.subject);
}
TestimonialSchema.pre('validate', function (next) {
	if (!this.slug) {
		this.slugify();
	}
	return next();
});
TestimonialSchema.virtual('id').get(function () { return this._id });
TestimonialSchema.virtual('type', {
	ref: 'Type',
	localField: 'typeId',
	foreignField: '_id',
	justOne: true,
});

TestimonialSchema.plugin(mongoosePaginate);
export default mongoose.model('Testimonial', TestimonialSchema);