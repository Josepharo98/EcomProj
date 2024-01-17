const db = require('./connection');
const { User, Product, Category } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Category', 'categories');
  await cleanDB('Product', 'products');
  await cleanDB('User', 'users');

  const categories = await Category.insertMany([
    { name: 'Men' },
    { name: 'Women' },
    { name: 'Electronics' },
    { name: 'Kids' },
    { name: 'LifeStyle' }
  ]);

  console.log('categories seeded');

  const products = await Product.insertMany([
    {
      name: 'Cologne For Him',
      description:
        'Cologne For Him.',
      image: 'Cologne-For-Him.jpg',
      category: categories[0]._id,
      price: 22.99,
      quantity: 93
    },
    {
      name: '3 for 1',
      description:
        'Limited time sale.',
      image: 'Three-For-One.jpg',
      category: categories[1]._id,
      price: 16.99,
      quantity: 27
    },
    {
      name: 'Kid Dress',
      category: categories[3]._id,
      description:
        'Dress you kids up and enjoy.',
      image: 'Kid-Dress.jpg',
      price: 7.99,
      quantity: 20
    },
    {
      name: 'Handmade Soap',
      category: categories[4]._id,
      description:
        'Try out newest and freshest soap now!!',
      image: 'soap.jpg',
      price: 3.99,
      quantity: 50
    },
    {
      name: 'Knitted Shirt',
      category: categories[0]._id,
      description:
        'Try our hand made shirt.',
      image: 'Knitted-Shirt.jpg',
      price: 14.99,
      quantity: 100
    },
    {
      name: 'Camera',
      category: categories[2]._id,
      description:
        'Capture life.',
      image: 'camera.jpg',
      price: 399.99,
      quantity: 30
    },
    {
      name: 'Tablet',
      category: categories[2]._id,
      description:
        'Get on for the kids.',
      image: 'tablet.jpg',
      price: 199.99,
      quantity: 30
    },
    {
      name: 'Tales at Bedtime',
      category: categories[3]._id,
      description:
        'Make betime easy.',
      image: 'bedtime-book.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Black Button Down',
      category: categories[1]._id,
      description: 'Womans black button down.',
      image: 'black-button-down.jpg',
      price: 8.99,
      quantity: 64
    },
    {
      name: 'Summer Top',
      category: categories[1]._id,
      description:
        'Womans Summer Top.',
      image: 'Summer-Top.jpg',
      price: 9.99,
      quantity: 87
    },
    {
      name: 'Teddy Bear',
      category: categories[3]._id,
      description:
        'For the Kids.',
      image: 'teddy-bear.jpg',
      price: 7.99,
      quantity: 100
    },
    {
      name: 'Button Down',
      category: categories[1]._id,
      description:
        'Women button down shirt.',
      image: 'button-down.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Leather Wallet',
      category: categories[0]._id,
      description: 'Stylish leather wallet for men.',
      image: 'leather-wallet.jpg',
      price: 29.99,
      quantity: 50
    },
    {
      name: 'Sunflower Dress',
      category: categories[1]._id,
      description: 'Bright and floral dress for women.',
      image: 'sunflower-dress.jpg',
      price: 19.99,
      quantity: 75
    },
    {
      name: 'Smartwatch',
      category: categories[2]._id,
      description: 'Stay connected with our latest smartwatch.',
      image: 'smartwatch.jpg',
      price: 149.99,
      quantity: 25
    },
    {
      name: 'Educational Toys Set',
      category: categories[3]._id,
      description: 'Engage your kids with fun and educational toys.',
      image: 'educational-toys.jpg',
      price: 29.99,
      quantity: 100
    },
    {
      name: 'Gardening Kit',
      category: categories[4]._id,
      description: 'Start your gardening journey with our kit.',
      image: 'gardening-kit.jpg',
      price: 39.99,
      quantity: 40
    }
  ]);

  console.log('products seeded');

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
