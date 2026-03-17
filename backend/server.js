// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');

// Initialize Express app
const app = express();

// --- Database Connection ---
connectDB(); // MongoDB connection

// --- Middleware ---
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded requests
app.use(morgan('dev')); // Logging requests (use 'tiny' in production)

// --- Routes ---
// Auth & User Routes
app.use('/api/auth', require('./routes/authRoutes'));

// Upload Routes (Cloudinary + Multer)
app.use('/api/upload', require('./routes/uploadRoutes'));

// Blog Routes
app.use('/api/admin/blogs', require('./routes/blogRoutes'));

// Test / Health Check Route
app.get('/', (req, res) => {
  res.json({ message: 'API is running...', status: 'success' });
});

// --- Error Handling Middleware ---
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Server Error',
  });
});

// --- Export app for serverless / external server ---
// When running locally (e.g. `node server.js`), we still start a listener.
// When deployed to platforms like Vercel (using @vercel/node), the platform
// imports this file and uses the exported app instead of calling listen().

const PORT = process.env.PORT || 5000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
}

module.exports = app;