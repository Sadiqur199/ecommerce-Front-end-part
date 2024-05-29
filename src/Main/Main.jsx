import React, { useState, createContext } from 'react';
import Navbar from '../Component/Navbar/Navbar';
import Footer from '../Component/Footer/Footer';
import { Outlet } from 'react-router-dom';
import ProductApi from '../Component/ProductApi/ProductApi';

export const ProductContext = createContext();

const Main = () => {
  // product details
  const [detail, setDetail] = useState([])
  // filtered products

  const [products, setProducts] = useState(ProductApi);

  const searchbtn = (searchTerm) => {
    const filteredProducts = ProductApi.filter((product) => 
      product.cat.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.Title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProducts(filteredProducts);
  };

  const view = (product) =>{
    setDetail([{...products}])
  }

  return (
    <ProductContext.Provider value={{ products, searchbtn ,detail,view}}>
      <Navbar />
      <Outlet />
      <Footer />
    </ProductContext.Provider>
  );
};

export default Main;
