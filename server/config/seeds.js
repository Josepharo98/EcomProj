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
      quantity: 500
    },
    {
      name: '3 for 1',
      description:
        'Limited time sale.',
      image: 'Three-For-One.jpg',
      category: categories[1]._id,
      price: 16.99,
      quantity: 538
    },
    {
      name: 'Kid Dress',
      category: categories[1]._id,
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
      category: categories[1]._id,
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
      name: 'Spinning Top',
      category: categories[4]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Wool Sweater',
      category: categories[0]._id,
      description:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      image: 'plastic-horses.jpg',
      price: 2.99,
      quantity: 1000
    },
    {
      name: 'Teddy Bear',
      category: categories[4]._id,
      description:
        'For the Kids.',
      image: 'teddy-bear.jpg',
      price: 7.99,
      quantity: 100
    },
    {
      name: 'Alphabet Blocks',
      category: categories[4]._id,
      description:
        'The Kids would love this.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      quantity: 600
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
