const mongoose = require('mongoose');

const predictionSchema = new mongoose.Schema({
  sport: String,
  match: String,
  prediction: String,
  result: String,
  accuracy: Number,
  enhanced: Boolean,
  date: String
});

module.exports = mongoose.model('Prediction', predictionSchema);
