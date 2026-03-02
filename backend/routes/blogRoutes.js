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

// All routes are protected (admin only)
router.use(protect);

router.route('/')
    .get(getBlogs)
    .post(upload.single('image'), createBlog);

router.route('/:id')
    .get(getBlogById)
    .put(upload.single('image'), updateBlog)
    .delete(deleteBlog);

module.exports = router;
