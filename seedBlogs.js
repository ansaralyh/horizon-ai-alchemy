import mongoose from 'mongoose';
import Blog from './backend/models/Blog.js';
import dotenv from 'dotenv';
dotenv.config({ path: './backend/.env' });

const sampleBlogs = [
    {
        title: 'Introduction to AI Alchemy',
        slug: 'intro-to-ai-alchemy',
        content: '<p>AI Alchemy is the future of software development...</p>',
        excerpt: 'AI Alchemy is the future of software development, leveraging cutting-edge intelligence to transform ideas into robust applications.',
        category: 'Technology',
        author: 'Admin',
        thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
        status: 'published'
    },
    {
        title: 'Frontend Best Practices 2024',
        slug: 'frontend-best-practices-2024',
        content: '<p>Modern frontend development requires a strong focus on performance and accessibility...</p>',
        excerpt: 'In 2024, modern frontend development is about more than just code; it is a blend of performance, user-centric design, and accessibility.',
        category: 'Development',
        author: 'Admin',
        thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
        status: 'published'
    },
    {
        title: 'Mastering MongoDB Aggregations',
        slug: 'mastering-mongodb-aggregations',
        content: '<p>Aggregation pipelines are powerful tools for data processing in MongoDB...</p>',
        excerpt: 'Unlock the power of MongoDB aggregation pipelines to process complex data structures with high efficiency and precision.',
        category: 'Database',
        author: 'Admin',
        thumbnail: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d',
        status: 'draft'
    }
];

const seedBlogs = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected...');

        await Blog.deleteMany();
        console.log('Blogs Cleared...');

        await Blog.insertMany(sampleBlogs);
        console.log('Sample Blogs Seeded!');

        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

seedBlogs();
