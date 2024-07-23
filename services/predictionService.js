const axios = require('axios');
const Prediction = require('../models/Prediction');

const fetchPredictions = async (dateFrom, dateTo) => {
  const options = {
    method: 'GET',
    url: `https://${process.env.RAPIDAPI_HOST}/bm/predictions/list/${dateFrom}/${dateTo}`,
    headers: {
      'x-rapidapi-key': process.env.RAPIDAPI_KEY,
      'x-rapidapi-host': process.env.RAPIDAPI_HOST
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error('Error fetching predictions:', error);
    throw new Error('Could not fetch predictions');
  }
};

module.exports = {
  fetchPredictions
};
