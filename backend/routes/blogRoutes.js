const express = require('express');
const router = express.Router();
const {
    getBlogs,
    getBlogById,
    createBlog,
    updateBlog,
    deleteBlog,
} = require('../controllers/blogController');
const { protect } = require('../middleware/authMiddleware');
const { upload } = require('../config/cloudinary');

// GET routes are public
router.route('/').get(getBlogs);
router.route('/:id').get(getBlogById);

// POST, PUT, DELETE routes require admin protection
router.route('/').post(protect, upload.single('image'), createBlog);
router.route('/:id')
    .put(protect, upload.single('image'), updateBlog)
    .delete(protect, deleteBlog);

module.exports = router;
