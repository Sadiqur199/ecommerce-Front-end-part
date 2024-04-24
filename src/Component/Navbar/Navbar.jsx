import React from "react";
import { FaTruckMoving } from "react-icons/fa";
import logo from "../../../public/image/h-removebg-preview.png";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RiLoginCircleLine } from "react-icons/ri";
import { RiLogoutCircleLine } from "react-icons/ri";
import { useAuth0 } from "@auth0/auth0-react";
import "./Navbar.css";

const Navbar = () => {
  const { loginWithRedirect ,logout,user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }

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
            {
              isAuthenticated &&
              (
                <div className="account">
                <div className="user_icon">
                  <FaUserCircle />
                </div>
                <p>Hello,{user.name}</p>
              </div>
              )
            }

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
              <Link to='/' className="link">Home</Link>
            </li>
            <li>
              <Link to='/product' className="link">Product</Link>
            </li>
            <li>
              <Link to='/about' className="link">About</Link>
            </li>
            <li>
              <Link to='/contact' className="link">Contact</Link>
            </li>
          </ul>
          </div>
          <div className="auth">
            {
              isAuthenticated?
              <button  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><RiLogoutCircleLine /></button> :
              <button onClick={() => loginWithRedirect()}><RiLoginCircleLine /></button>

            }

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
