const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

// Validate credentials
const requiredEnv = ['CLOUDINARY_CLOUD_NAME', 'CLOUDINARY_API_KEY', 'CLOUDINARY_API_SECRET'];
const missingEnv = requiredEnv.filter(env => !process.env[env]);

if (missingEnv.length > 0) {
    console.error('❌ Missing Cloudinary Environment Variables:', missingEnv.join(', '));
} else {
    console.log('✅ Cloudinary Config Check:', {
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        has_key: !!process.env.CLOUDINARY_API_KEY,
        has_secret: !!process.env.CLOUDINARY_API_SECRET
    });
}

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'admin-uploads',
        allowedFormats: ['jpeg', 'png', 'jpg', 'webp'],
    },
});

// Configure multer with limits to prevent long-running uploads from timing out Vercel
const upload = multer({ 
    storage,
    limits: {
        fileSize: 5 * 1024 * 1024, // 5MB limit to prevent timeouts
    }
});

module.exports = { cloudinary, upload };

