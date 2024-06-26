import React, { useState, createContext } from 'react';
import Navbar from '../Component/Navbar/Navbar';
import Footer from '../Component/Footer/Footer';
import { Outlet } from 'react-router-dom';
import ProductApi from '../Component/ProductApi/ProductApi';

export const ProductContext = createContext();

const Main = () => {
  // product details
  const [detail, setDetail] = useState([])
  const[close,setClose] = useState(false)
  // filtered products

  const [products, setProducts] = useState(ProductApi);
  // add to cart
  const[cart,setCart] = useState([])

  const searchbtn = (searchTerm) => {
    const filteredProducts = ProductApi.filter((product) => 
      product.cat.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.Title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProducts(filteredProducts);
  };

  const view = (product) =>{
    setDetail([{...product}])
    setClose(true)
  }

  // add to cart section

  const addtocart = (product) =>{
    const exist = cart.find((x) =>{
      return x.id === product.id
    })
    if(exist){
      alert("This Product Already Add To Cart")
    }
    else{
      setCart([...cart,{...product, qty:1}])
      alert("Product Add To Cart")
    }
  }

  return (
    <ProductContext.Provider value={{ products, searchbtn ,detail,view,close,setClose,cart,setCart,addtocart}}>
      <Navbar />
      <Outlet />
      <Footer />
    </ProductContext.Provider>
  );
};

export default Main;
