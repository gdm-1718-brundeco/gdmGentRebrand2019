import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
import slug from 'slug';
import { Study } from '.';

const { Schema } = mongoose;

const StudySchema = new Schema(
	{
		name: { type: String, required: true, max: 128 },
		description: { type: String, required: true, max: 512 },
		slug: { type: String, lowercase: true, unique: true, required: true },
		deleted_at: { type: Date, required: false },
		parentStudyId: { type: Schema.Types.ObjectId, ref: Study, required: false },
	},
	{
		toJSON: { virtuals: true },
		toObject: { virtuals: true },
	},
	{
		timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
	},
);

StudySchema.methods.slugify = function () {
	this.slug = slug(this.name);
}

StudySchema.pre('validate', function(next) {
	if (!this.slug) {
		this.slugify();
	}

	return next();
});

StudySchema.virtual('id').get(function() { return this._id });
StudySchema.virtual('subStudies', {
	ref: 'Study',
	localField: '_id',
	foreignField: 'parentStudyId',
	justOne: false,
})

StudySchema.plugin(mongoosePaginate);
export default mongoose.model('Study', StudySchema);