const express = require('express');
const { getPredictions, checkResults } = require('../controllers/predictionController');

const router = express.Router();

router.get('/', getPredictions);
router.post('/check-results', checkResults);

module.exports = router;
