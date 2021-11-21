const { Schema, model } = require('mongoose');

const citySchema = new Schema({
  cityId: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  population: {
    type: Number,
  }
});

const Places = model('Places', citySchema);

module.exports = Places;