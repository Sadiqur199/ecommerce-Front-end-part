import React from 'react';
import Navbar from '../Component/Navbar/Navbar';
import Home from '../Component/Home/Home';
import Footer from '../Component/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;