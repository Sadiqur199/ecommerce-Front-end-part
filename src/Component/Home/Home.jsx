import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import './Home.css'
import image1 from '../../../public/image/image-removebg-preview (5).png'
import image2 from '../../../public/image/1p.png'
import image3 from '../../../public/image/2p.png'
import image4 from '../../../public/image/3p.png'
import { FiTruck } from "react-icons/fi";
import { CiDollar } from "react-icons/ci";
import { BsPercent } from "react-icons/bs";
import { FaHeadphones } from "react-icons/fa6";

const Home = () => {
  return (
    <div>
      <div className="top_banner">
        <div className="container">
          <div className="detail">
            <h2>The Best Dress Collection 2024</h2>
            <Link className="link" to="/product">
              Shop Now <FaArrowRightLong />
            </Link>
          </div>
          <div className="img_box">
            <img src={image1} alt='Dress' />
          </div>
        </div>
      </div>
      <div className="product_type">
        <div className="container">
           <div className="box">
            <div className="img_box">
              <img src={image2} alt="" />
            </div>
            <div className="detail">
              <p>Man Collection</p>
            </div>
           </div> 
           {/* second box */}
           <div className="box">
            <div className="img_box">
              <img src={image3} alt="" />
            </div>
            <div className="detail">
              <p>Woman Collection</p>
            </div>
           </div>
           {/* third box */}
           <div className="box">
            <div className="img_box">
              <img src={image4} alt="" />
            </div>
            <div className="detail">
              <p>Children Collection</p>
            </div>
           </div>
        </div>
      </div>
      {/* about */}
      <div className="about">
        <div className="container">
          <div className="box">
            <div className="icon">
            <FiTruck />
            </div>
            <div className="detail">
              <h3>Free Shipping</h3>
              <p>Order above $1000</p>
            </div>
          </div>
          {/* second box*/}
          <div className="box">
            <div className="icon">
            <CiDollar />
            </div>
            <div className="detail">
              <h3>Return & Refund</h3>
              <p>Money Back Guaranty</p>
            </div>
          </div>
          {/* third box */}
          <div className="box">
            <div className="icon">
            <BsPercent />
            </div>
            <div className="detail">
              <h3>Member Discount</h3>
              <p>On every order</p>
            </div>
          </div>
          {/* Fourth Box */}
          <div className="box">
            <div className="icon">
            <FaHeadphones />
            </div>
            <div className="detail">
              <h3>Customer Support</h3>
              <p>24/7</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
