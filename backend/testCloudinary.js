require('dotenv').config({ path: './.env' });
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

console.log('--- Testing Cloudinary Connection ---');
console.log('Cloud Name:', process.env.CLOUDINARY_CLOUD_NAME);
console.log('API Key:', process.env.CLOUDINARY_API_KEY);
console.log('Has Secret:', !!process.env.CLOUDINARY_API_SECRET);

cloudinary.api.ping()
    .then(result => {
        console.log('✅ Cloudinary Ping Successful:', result);
        process.exit(0);
    })
    .catch(error => {
        console.error('❌ Cloudinary Ping Failed:', error.message);
        process.exit(1);
    });
