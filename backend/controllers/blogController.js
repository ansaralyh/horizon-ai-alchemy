const Blog = require('../models/Blog');

// @desc    Get all blogs (with pagination and search)
// @route   GET /api/admin/blogs
// @access  Private
const getBlogs = async (req, res) => {
    try {
        const { page = 1, limit = 10, search, category } = req.query;

        // Build query
        const query = {};
        if (search) {
            query.title = { $regex: search, $options: 'i' };
        }
        if (category) {
            query.category = category;
        }

        // Pagination
        const skip = (page - 1) * limit;
        const blogs = await Blog.find(query)
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(parseInt(limit));

        const total = await Blog.countDocuments(query);

        res.status(200).json({
            success: true,
            message: 'Blogs fetched successfully',
            data: {
                blogs,
                pagination: {
                    total,
                    page: parseInt(page),
                    limit: parseInt(limit),
                    pages: Math.ceil(total / limit),
                },
            },
        });
    } catch (error) {
        console.error('Fetch Blogs Error:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// @desc    Get single blog
// @route   GET /api/admin/blogs/:id
// @access  Private
const getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);

        if (!blog) {
            return res.status(404).json({ success: false, message: 'Blog not found' });
        }

        res.status(200).json({
            success: true,
            message: 'Blog fetched successfully',
            data: blog,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @desc    Create new blog
// @route   POST /api/admin/blogs
// @access  Private
const createBlog = async (req, res) => {
    try {
        console.log('Create Blog Request Body:', req.body);
        const { title, slug, content, excerpt, category, author, status, thumbnail } = req.body;

        // --- Data Validation ---
        if (!title || !content || !excerpt || !category || !author) {
            return res.status(400).json({ 
                success: false, 
                message: 'All fields (title, content, excerpt, category, author) are required' 
            });
        }

        // --- Image Handling ---
        // If manual thumbnail upload via multer was used, req.file.path would be here
        const imageUrl = req.file ? req.file.path : thumbnail;

        // --- Blog Creation ---
        const blog = await Blog.create({
            title,
            slug: slug || title.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, ''),
            content,
            excerpt,
            category,
            author,
            status: status || 'draft',
            thumbnail: imageUrl || '',
        });

        res.status(201).json({
            success: true,
            message: 'Blog created successfully',
            data: blog,
        });
    } catch (error) {
        console.error('Create Blog Error:', error);
        
        // Handle MongoDB/Mongoose specific errors
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({ success: false, message: messages.join(', ') });
        }

        if (error.code === 11000) {
            return res.status(400).json({ success: false, message: 'Slug already exists' });
        }
        res.status(500).json({ success: false, message: error.message });
    }
};

// @desc    Update blog
// @route   PUT /api/admin/blogs/:id
// @access  Private
const updateBlog = async (req, res) => {
    try {
        const { title, slug, content, excerpt, category, author, status, thumbnail } = req.body;

        let blog = await Blog.findById(req.params.id);

        if (!blog) {
            return res.status(404).json({ success: false, message: 'Blog not found' });
        }

        const imageUrl = req.file ? req.file.path : thumbnail;

        blog = await Blog.findByIdAndUpdate(
            req.params.id,
            {
                title,
                slug: slug || (title ? title.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') : undefined),
                content,
                excerpt,
                category,
                author,
                status,
                thumbnail: imageUrl !== undefined && imageUrl !== null ? imageUrl : blog.thumbnail,
            },
            { new: true, runValidators: true }
        );

        res.status(200).json({
            success: true,
            message: 'Blog updated successfully',
            data: blog,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @desc    Delete blog
// @route   DELETE /api/admin/blogs/:id
// @access  Private
const deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);

        if (!blog) {
            return res.status(404).json({ success: false, message: 'Blog not found' });
        }

        await blog.deleteOne();

        res.status(200).json({
            success: true,
            message: 'Blog removed successfully',
            data: {},
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    getBlogs,
    getBlogById,
    createBlog,
    updateBlog,
    deleteBlog,
};
