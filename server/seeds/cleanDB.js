const models = require('../models');
const db = require('../config/connection');

module.exports = async (modelName, collectionName) => {
  try {
    let modelExists = await models[modelName].db.db.listCollections({
      name: collectionName,
    }).toArray();

    if (modelExists.length) {
      await db.dropCollection(collectionName);
    }
  } catch (err) {
    throw err;
  }
};

server\schemas\typeDefs.js:
const typeDefs = `
  type User {
    _id: ID!
    username: String!
    email: String!
    # Add other user-related fields as needed
  }

  type Product {
    _id: ID!
    name: String!
    description: String
    price: Float!
    quantityInStock: Int!
  }

  type Order {
    _id: ID!
    user: User!
    products: [ProductOrder]!
    total: Float!
    status: String!
    createdAt: String!
    # Add other order-related fields as needed
  }

  type ProductOrder {
    product: Product!
    quantity: Int!
  }

  type Auth {
    token: ID!
    user: User
  }
  type Query {
    user : User
    # products: [Product]
    # orders(user_id: ID!): [Order]
    # Add other queries as needed
  }

  type Mutation {
   # createUser(username: String!, email: String!, password: String!): Auth
    # createProduct(name: String!, description: String, price: Float!, quantityInStock: Int!): Product
    createOrder(user_id: ID!, products: [ProductOrderInput]!): Order
    # Add other mutations as needed
    
  }

  input ProductOrderInput {
    product_id: ID!
    quantity: Int!
  }
`;

module.exports = typeDefs;
