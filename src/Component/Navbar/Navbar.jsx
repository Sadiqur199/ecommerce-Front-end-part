import React from "react";
import "./Navbar.css";
import { FaTruckMoving } from "react-icons/fa";
import logo from "../../../public/image/h-removebg-preview.png";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RiLoginCircleLine } from "react-icons/ri";
import { RiLogoutCircleLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div>
      <div className="nav-header">
        <div className="icon">
          <FaTruckMoving />
        </div>
        <p>FREE shipping when shopping upto $1000</p>
      </div>
      <div className="main_header">
        <div className="container">
          <div>
            <img className="logo" src={logo} alt="" />
          </div>
          <div className="search_box">
            <input
              type="search"
              name=""
              id=""
              placeholder="Enter Your Product Name"
            />
            <button>Search</button>
          </div>
          <div className="icon">
            <div className="account">
              <div className="user_icon">
                <FaUserCircle />
              </div>
              <p>Hello ,user</p>
            </div>
            <div className="second_icon">
              <Link to="/" className="link">
                <CiHeart />
              </Link>
              <Link to="/cart" className="link">
                <MdOutlineShoppingBag />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="container">
          <div className="nav">
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/product'>Product</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
          </div>
          <div className="auth">
          <RiLoginCircleLine />
          <RiLogoutCircleLine />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
