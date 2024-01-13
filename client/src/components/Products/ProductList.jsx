import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { gql } from 'graphql-tag';
import ShoppingCart from './ShoppingCart';  // Import your ShoppingCart component

const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      _id
      name
      description
      price
    }
  }
`;

const ProductList = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (productId, productName, price) => {
    // Checks if the item is already in the cart
    const existingItem = cartItems.find(item => item.productId === productId);

    if (existingItem) {
      // If the item is already in the cart, update the quantity
      setCartItems(prevItems => prevItems.map(item =>
        item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      // If the item is not in the cart, add it with quantity 1
      setCartItems(prevItems => [...prevItems, { productId, productName, price, quantity: 1 }]);
    }
  };

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
          {/* Dynamically generate image source based on product ID */}
          <img
            src={`../src/assets/images/p${product._id}.jpg`}
            alt={`Product ${product.name}`}
            style={{ maxWidth: '100px', maxHeight: '100px' }}
          />
          <button onClick={() => handleAddToCart(product._id, product.name, product.price)}>
            Add to Cart
          </button>
          <hr />
        </div>
      ))}
      
      {/* Renders the ShoppingCart component with cartItems */}
      <ShoppingCart cartItems={cartItems} />
    </div>
  );
};

export default ProductList;