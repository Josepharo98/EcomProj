import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";

const Home = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;
// import React, { useState, useEffect } from 'react';  // Import useState and useEffect
// import ProductSlider from '../components/ProductSlider/ProductSlider';
// import CategoryMenu from '../components/CategoryMenu';
// import Cart from '../components/Cart';

// const Home = () => {
//   // State to store products
//   const [products, setProducts] = useState([]);

//   // Sample function to fetch products (replace with your actual data fetching logic)
//   const fetchProducts = async () => {
//     try {
//       // Fetch products from your API or data source
//       const response = await fetch('your_api_endpoint');
//       const data = await response.json();
      
//       // Update the products state
//       setProducts(data);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

//   // Fetch products on component mount
//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <div className="container">
//       <CategoryMenu />
//       <ProductSlider products={products} />
//       <Cart />
//     </div>
//   );
// };

// export default Home;
