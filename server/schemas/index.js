const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

module.exports = { typeDefs, resolvers };


// // /graphql/schema.js
// const { gql } = require('apollo-server-express');
// const productTypeDefs = require('./productTypeDefs');
// const orderTypeDefs = require('./orderTypeDefs');

// const typeDefs = gql`
//   type Query {
//     _: String
//   }
//   type Mutation {
//     _: String
//   }
// `;

// module.exports = [typeDefs, productTypeDefs, orderTypeDefs];
