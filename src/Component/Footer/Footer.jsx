import React from 'react';
import './Footer.css'
import logo from "../../../public/image/h-removebg-preview.png";
import { RiFacebookFill } from 'react-icons/ri';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="about">
            <div >
              <img className="logo" src={logo} alt="logo" />
            </div>
            <div className="detail">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quam repellat inventore eos delectus necessitatibus repellendus iste aspernatur ut optio.</p>
              <div className="icon">
                <li>
                  <RiFacebookFill/>
                </li>
                <li>
                  <AiOutlineInstagram/>
                </li>
                <li>
                  <AiOutlineTwitter/>
                </li>
                <li>
                  <BsYoutube/>
                </li>
              </div>
            </div>
          </div>
          <div className="account">
            <h3>My Account</h3>
            <ul>
              <li>Account</li>
              <li>Order</li>
              <li>Cart</li>
              <li>Shipping</li>
              <li>Return</li>
            </ul>
          </div>
          <div className="page">
            <h3>pages</h3>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Terms & Condition</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;