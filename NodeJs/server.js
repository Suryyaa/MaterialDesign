const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000; // or any other port you prefer

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect('mongodb://localhost:27017/SuryaDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB', error);
  });

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
