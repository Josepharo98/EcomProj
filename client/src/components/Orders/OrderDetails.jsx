import React from 'react';
import { useQuery } from '@apollo/client';
import { gql } from 'graphql-tag';

const GET_ORDER = gql`
  query GetOrder($orderId: ID!) {
    order(_id: $orderId) {
      _id
      total
      status
      createdAt
      products {
        product {
          _id
          name
          price
        }
        quantity
      }
    }
  }
`;

const OrderDetails = ({ orderId }) => {
  const { loading, error, data } = useQuery(GET_ORDER, {
    variables: { orderId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const order = data.order;

  return (
    <div>
      <h2>Order Details</h2>
      <p>Order ID: {order._id}</p>
      <p>Total: ${order.total}</p>
      <p>Status: {order.status}</p>
      <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
      <h3>Products:</h3>
      <ul>
        {order.products.map((productOrder) => (
          <li key={productOrder.product._id}>
            {productOrder.product.name} - Quantity: {productOrder.quantity} - Price: ${productOrder.product.price}
          </li>
        ))}
      </ul>
      {/* Add any other order information or actions here */}
    </div>
  );
};

export default OrderDetails;
