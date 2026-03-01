require('dotenv').config();
const mongoose = require('mongoose');
const Admin = require('./models/Admin');

const seedAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        // Check if admin already exists
        const adminExists = await Admin.findOne({ email: 'admin@horizonbeetech.com' });

        if (!adminExists) {
            await Admin.create({
                email: 'admin@horizonbeetech.com',
                password: 'admin@123',
                role: 'superadmin'
            });
            console.log('✅ Admin user created successfully.');
        } else {
            console.log('ℹ️ Admin user already exists. Checking password...');
            // Update password just in case
            adminExists.password = 'admin@123';
            await adminExists.save();
            console.log('✅ Admin user password updated.');
        }

        process.exit(0);
    } catch (error) {
        console.error('❌ Error seeding admin:', error);
        process.exit(1);
    }
};

seedAdmin();
