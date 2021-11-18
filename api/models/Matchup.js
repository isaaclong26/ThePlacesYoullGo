const { Schema, model } = require('mongoose');

const bucketSchema = new Schema({
  tech1: {
    type: String,
    required: true,
  },
  tech2: {
    type: String,
    required: true,
  },
  tech1_votes: {
    type: Number,
    default: 0,
  },
  tech2_votes: {
    type: Number,
    default: 0,
  },
});

const List = model('List', bucketSchema);

module.exports = List;
