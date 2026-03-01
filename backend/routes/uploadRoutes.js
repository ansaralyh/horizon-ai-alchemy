const express = require('express');
const router = express.Router();
const { upload } = require('../config/cloudinary');
const { protect } = require('../middleware/authMiddleware');

// @desc    Upload an image
// @route   POST /api/upload
// @access  Private
// Using upload.single('image') inside the route
router.post('/', protect, upload.single('image'), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        // Return the URL and public ID from Cloudinary
        res.status(200).json({
            message: 'Image uploaded successfully',
            url: req.file.path,
            // You can also send back req.file.filename if you need the public ID
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server upload error' });
    }
});

module.exports = router;
