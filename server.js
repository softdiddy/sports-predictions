const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const predictionRoutes = require('./routes/predictionRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
//mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Use routes
app.use('/api/predictions', predictionRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
