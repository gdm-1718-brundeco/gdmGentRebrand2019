"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _mongoosePaginate = _interopRequireDefault(require("mongoose-paginate"));

var Schema = _mongoose["default"].Schema;
var ProjectImageSchema = new Schema({
  title: {
    type: String,
    required: true,
    max: 128
  },
  path: {
    type: String,
    required: true
  },
  projectId: {
    type: Schema.Types.ObjectId,
    ref: 'Project',
    required: true
  }
}, {
  toJSON: {
    virtuals: true
  },
  toObject: {
    virtuals: true
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});
ProjectImageSchema.virtual('id').get(function () {
  return this._id;
});
ProjectImageSchema.virtual('project', {
  ref: 'Project',
  localField: 'projectId',
  foreignField: '_id',
  justOne: true
});
ProjectImageSchema.plugin(_mongoosePaginate["default"]);

var _default = _mongoose["default"].model('ProjectImage', ProjectImageSchema);

exports["default"] = _default;