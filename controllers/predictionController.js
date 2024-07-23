const Prediction = require('../models/Prediction');
const { fetchPredictions } = require('../services/predictionService');

const getPredictions = async (req, res) => {
  const { dateFrom, dateTo } = req.query;

  if (!dateFrom || !dateTo) {
    return res.status(400).json({ error: 'dateFrom and dateTo parameters are required' });
  }

  try {
    const predictions = await fetchPredictions(dateFrom, dateTo);
    res.json(predictions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const checkResults = async (req, res) => {
  const { match, result } = req.body;
  const prediction = await Prediction.findOne({ match });

  if (prediction) {
    prediction.result = result;
    prediction.accuracy = result === prediction.prediction ? 1 : 0;
    await prediction.save();
    res.json(prediction);
  } else {
    res.status(404).json({ error: 'Prediction not found' });
  }
};

module.exports = {
  getPredictions,
  checkResults
};
