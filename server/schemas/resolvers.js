const { User, Product, Order } = require('../models');

const resolvers = {
  Query: {
    user: async (_, { _id }) => {
      return User.findById(_id);
    },
    products: async () => {
      return Product.find({});
    },
    orders: async (_, { user_id }) => {
      return Order.find({ 'user._id': user_id });
    },
  },
  Mutation: {
    createUser: async (_, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      return user;
    },
    createProduct: async (_, { name, description, price, quantityInStock }) => {
      const product = await Product.create({ name, description, price, quantityInStock });
      return product;
    },
    createOrder: async (_, { user_id, products }) => {
      // Logic to create an order
      // - Validate products and user_id
      // - Calculate total based on product prices and quantities
      // - Create an order record in the database
      // - Update product quantities in stock
      // - Return the created order
      // This logic will depend on your specific requirements
    },
  },
};

module.exports = resolvers;
