const Order = require('../models/OrderModel');
const Product = require('../models/ProductModel');
const User = require('../models/UserModel')
const {signToken, AuthenticationError} = require('../utils/auth')

const resolvers = {
  Query: {
    // You can add any necessary queries for orders here
    user: async(_,__,context) => {if (context.user){
      return User.findOne({_id:context.user._id})
    }
    throw AuthenticationError
  }
   
  },
  Mutation: {
    createOrder: async (_, { orderInput }) => {
      try {
        // Create a new order with the provided orderInput
        const newOrder = new Order({
          products: orderInput.products,
          totalPrice: orderInput.totalPrice,
        });

        // Save the new order to the database
        await newOrder.save();

        // Decrease the quantity in stock for each product in the order
        for (const product of orderInput.products) {
          await Product.findByIdAndUpdate(product.productId, {
            $inc: { quantityInStock: -product.quantity },
          });
        }

        // Return the newly created order
        return newOrder;
      } catch (err) {
        // If an error occurs during the database operation, throw an error
        throw new Error(err);
      }
    },
  },
};

// Export the resolver object
module.exports = resolvers;
