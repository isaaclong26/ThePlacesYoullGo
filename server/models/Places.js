const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const citySchema = new Schema({
  cityId: {
    type: ID,
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

module.exports = citySchema;