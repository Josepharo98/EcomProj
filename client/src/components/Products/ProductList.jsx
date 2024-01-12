import React from 'react';
import { useQuery } from '@apollo/client';
import { gql } from 'graphql-tag';

const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      _id
      name
      description
      price
      quantityInStock
    }
  }
`;

const ProductList = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Product List</h2>
      {data.products.map((product) => (
        <div key={product._id}>
          <h3>{product.name}</h3>
          <p>Description: {product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Quantity in Stock: {product.quantityInStock}</p>
          <button onClick={() => handleAddToCart(product._id)}>Add to Cart</button>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
