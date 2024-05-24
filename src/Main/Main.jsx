import React, { useState } from 'react';
import Navbar from '../Component/Navbar/Navbar';
import Footer from '../Component/Footer/Footer';
import { Outlet } from 'react-router-dom';
import ProductApi from '../Component/ProductApi/ProductApi';
// import Product from '../Component/Product/Product';

const Main = () => {
  const [product, setProduct] = useState(ProductApi)
  const searchbtn = (product) =>{
    const change = ProductApi.filter((x) =>{
      return x.cat === product;
    })
    setProduct(change)
  }
  return (
    <div>
      <Navbar searchbtn={searchbtn}></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;