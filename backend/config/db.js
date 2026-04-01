// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
    // Check if we already have a connection
    if (mongoose.connection.readyState >= 1) {
        return;
    }

    try {
        if (!process.env.MONGODB_URI) {
            throw new Error('MONGODB_URI is not defined in environment variables');
        }
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ MongoDB connected successfully');
    } catch (err) {
        console.error('❌ MongoDB connection error:', err.message);
        // Do not exit process in serverless, let the error propagate
        if (process.env.NODE_ENV !== 'production') {
            process.exit(1); 
        }
        throw err;
    }
};

module.exports = connectDB;