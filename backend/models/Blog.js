const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Please add a title'],
            trim: true,
        },
        slug: {
            type: String,
            required: [true, 'Please add a slug'],
            unique: true,
            lowercase: true,
        },
        content: {
            type: String,
            required: [true, 'Please add content'],
        },
        category: {
            type: String,
            required: [true, 'Please add a category'],
        },
        author: {
            type: String,
            required: [true, 'Please add an author'],
        },
        thumbnail: {
            type: String,
            default: '',
        },
        status: {
            type: String,
            enum: ['published', 'draft'],
            default: 'draft',
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Blog', blogSchema);
