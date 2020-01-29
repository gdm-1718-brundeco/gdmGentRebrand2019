"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _mongoosePaginate = _interopRequireDefault(require("mongoose-paginate"));

var _slug = _interopRequireDefault(require("slug"));

var Schema = _mongoose["default"].Schema;
var EventSchema = new Schema({
  title: {
    type: String,
    required: true,
    max: 128
  },
  body: {
    type: String,
    required: false
  },
  event_date: {
    type: Date,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    lowercarse: true,
    unique: true,
    required: true
  },
  deleted_at: {
    type: Date,
    required: false
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

EventSchema.methods.slugify = function () {
  this.slug = (0, _slug["default"])(this.title);
};

EventSchema.pre('validate', function (next) {
  if (!this.slug) {
    this.slugify();
  }

  return next();
});
EventSchema.virtual('id').get(function () {
  return this._id;
});
EventSchema.plugin(_mongoosePaginate["default"]);

var _default = _mongoose["default"].model('Event', EventSchema);

exports["default"] = _default;