import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
import slug from 'slug';

const { Schema } = mongoose;

const CourseSchema = new Schema(
	{
		name: { type: String, required: true, max: 128 },
		description: { type: String, required: true, max: 512 },
		slug: { type: String, lowercase: true, unique: true, required: true },
		teacherIds: [ { type: Schema.Types.ObjectId, ref: 'Team', required: false } ],
		studyIds: [ { type: Schema.Types.ObjectId, ref: 'Study', required: true, } ],
		parentCourseId: { type: Schema.Types.ObjectId, ref: 'Course', required: false },
		deleted_at: { type: Date, required: false },
	},
	{
		toJSON: { virtuals: true },
		toObject: { virtuals: true},
	},
	{
		timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
	},
);

CourseSchema.methods.slugify = function () {
	this.slug = slug(this.name);
}

CourseSchema.pre('validate', function (next) {
	if (!this.slug) {
		this.slugify();
	}

	return next();
});

CourseSchema.virtual('id').get(function () { return this._id; });
CourseSchema.virtual('teachers', {
	ref: 'Team',
	localField: 'teacherIds',
	foreignField: '_id',
	justOne: false,
});
CourseSchema.virtual('mainCourse', {
	ref: 'Course',
	localField: 'parentCourseId',
	foreignField: '_id',
	justOne: true,
});
CourseSchema.virtual('subCourses', {
	ref: 'Course',
	localField: '_id',
	foreignField: 'parentCourseId',
	justOne: false,
});
CourseSchema.virtual('study', {
	ref: 'Study',
	localField: 'studyIds',
	foreignField: '_id',
	justOne: false,
});

CourseSchema.plugin(mongoosePaginate);
export default mongoose.model('Course', CourseSchema);