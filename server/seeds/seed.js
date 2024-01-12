const db = require('../config/connection');
const { User, Product } = require('../models');
const cleanDB = require('./cleanDB');
const seedData = require('./seedData.json');

db.once('open', async () => {
  try {
    await cleanDB('User', 'users');       // Clean the 'users' collection
    await cleanDB('Product', 'products'); // Clean the 'products' collection

    await User.insertMany(seedData.slice(0, 2));      // Seed the 'users' collection
    await Product.insertMany(seedData.slice(2, 4));   // Seed the 'products' collection

    console.log('Data seeded successfully!');
  } catch (err) {
    console.error('Error seeding data:', err);
  } finally {
    process.exit(0);
  }
});
