import React from 'react';
import { useQuery } from '@apollo/client';
import { gql } from 'graphql-tag';

const GET_ORDERS = gql`
  query GetOrders($userId: ID!) {
    orders(user_id: $userId) {
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

const OrderList = ({ userId }) => {
  const { loading, error, data } = useQuery(GET_ORDERS, {
    variables: { userId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Order List</h2>
      {data.orders.map((order) => (
        <div key={order._id}>
          <p>Order ID: {order._id}</p>
          <p>Total: ${order.total}</p>
          <p>Status: {order.status}</p>
          <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
          {/* Add any other order information or actions here */}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default OrderList;
