// /components/ShoppingCart.jsx
import React from 'react';

const ShoppingCart = ({ cartItems, removeFromCart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.map((item) => (
        <div key={item.productId}>
          <p>{item.productName} - Quantity: {item.quantity} - Price: ${item.price}</p>
          <button onClick={() => removeFromCart(item.productId)}>Remove from Cart</button>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;
