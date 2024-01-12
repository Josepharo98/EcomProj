import React from 'react';
import { useQuery } from '@apollo/client';
import { gql } from 'graphql-tag';

// Update the query to match your GraphQL schema
const GET_PRODUCT = gql`
  query GetProduct($productId: ID!) {
    product(_id: $productId) {
      _id
      name
      description
      price
      quantityInStock
    }
  }
`;

const ProductDetails = ({ productId }) => {
  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: { productId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const product = data.product;

  return (
    <div>
      <h2>{product.name} Details</h2>
      <p>Description: {product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Quantity in Stock: {product.quantityInStock}</p>
      <button onClick={() => handleAddToCart(product._id)}>
      Add to Cart
    </button>
    </div>
  );
};

export default ProductDetails;
