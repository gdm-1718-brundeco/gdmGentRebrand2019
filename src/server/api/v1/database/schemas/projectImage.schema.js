import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const { Schema } = mongoose;

const ProjectImageSchema = new Schema(
	{
		title: { type: String, required: true, max: 128 },
		path: { type: String, required: true },
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

ProjectImageSchema.plugin(mongoosePaginate);
export default mongoose.model('ProjectImage', ProjectImageSchema);