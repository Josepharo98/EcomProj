import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Error from './components/ErrorPage';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import OrderList from './components/Orders/OrderList';
import ProductList from './components/Products/ProductList';
import ProductDetails from './components/Products/ProductDetails';
import OrderDetails from './components/Orders/OrderDetails';
import ShoppingCart from './components/Cart/ShoppingCart';
import './index.css';

import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom';
import React, { useState } from 'react'; // Import useState and React
import Header from './components/Header';
import Nav from './components/Nav';
import Page from './components/Page';
import Footer from './components/Footer';
import ProductList from './components/Products/ProductList';
import ShoppingCart from './components/Cart/ShoppingCart';
import './index.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const currentPage = useLocation().pathname;

  const handleAddToCart = (productId) => {
    // Create a copy of the current cart items array
    const updatedCartItems = [...cartItems];
    // Check if the product is already in the cart
    const existingProduct = updatedCartItems.find(item => item.productId === productId);
    if (existingProduct) {
      // If the product is already in the cart, update its quantity
      existingProduct.quantity += 1;
    } else {
      // If the product is not in the cart, add it with a quantity of 1
      updatedCartItems.push({ productId, quantity: 1 });
    }
    // Update the state with the modified cart items
    setCartItems(updatedCartItems);
  };


  const handleRemoveFromCart = (productId) => {
    // Create a copy of the current cart items array
    const updatedCartItems = [...cartItems];
    // Find the index of the product in the cart
    const productIndex = updatedCartItems.findIndex(item => item.productId === productId);
    // If the product is found in the cart, remove it
    if (productIndex !== -1) {
      updatedCartItems.splice(productIndex, 1);
      // Update the state with the modified cart items
      setCartItems(updatedCartItems);
    }
  };

  return (
    <div>
      <Header>
        <Nav currentPage={currentPage} />
      </Header>
      <main>
        <Page currentPage={currentPage}>
          {currentPage === '/products' && (
            <>
              <ProductList handleAddToCart={handleAddToCart} />
              <ShoppingCart cartItems={cartItems} removeFromCart={handleRemoveFromCart} />
            </>
          )}
        </Page>
      </main>
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
