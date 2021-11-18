const { Schema, model } = require('mongoose');

const listSchema = new Schema({
  listitem: {
    type: String,
    required: true,
  },
});

const List = model('BucketList', listSchema);

module.exports = List;
