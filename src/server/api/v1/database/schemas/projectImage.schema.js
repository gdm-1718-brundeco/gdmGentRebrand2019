import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const { Schema } = mongoose;

const ProjectImageSchema = new Schema(
	{
		title: { type: String, required: true, max: 128 },
		path: { type: String, required: true },
		projectId: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
	},
	{
		toJSON: { virtuals: true },
		toObject: { virtuals: true },
	},
	{
		timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
	},
);

ProjectImageSchema.virtual('id').get(function() { return this._id });
ProjectImageSchema.virtual('project', {
	ref: 'Project',
	localField: 'projectId',
	foreignField: '_id',
	justOne: true,
});

ProjectImageSchema.plugin(mongoosePaginate);
export default mongoose.model('ProjectImage', ProjectImageSchema);