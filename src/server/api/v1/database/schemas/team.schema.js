import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
import slug from 'slug';

const { Schema } = mongoose;

const TeamSchema = new Schema(
	{
		first_name: { type: String, required: true, max: 64 },
		last_name: { type: String, required: true, max: 64 },
		job: { type: String, required: true, max: 128 },
		slug: { type: String, lowercase: true, unique: true, required: true },
		// Add with extra necessary info
		deleted_at: { type: Date, required: false },
		quotes: [{ type: Schema.Types.ObjectId, ref: 'Quote', required: false }],
	},
	{
		toJSON: { virtuals: true },
		toObject: { virtuals: true },
	},
	{
		timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
	}
);

TeamSchema.methods.slugify = function () {
	this.slug = slug(this.title);
}

TeamSchema.pre('validate', function (next) {
	if (!this.slug) {
		this.slugify();
	}

	return next();
});

TeamSchema.virtual('id').get(function () { return this._id });
TeamSchema.virtual('full_name').get(function() { return this.first_name + ' ' + this.last_name });
TeamSchema.virtual('quotes', {
	ref: 'Quote',
	localField: 'quotes',
	foreignField: '_id',
	justOne: false,
});

TeamSchema.plugin(mongoosePaginate);
export default mongoose.model('Team', TeamSchema);