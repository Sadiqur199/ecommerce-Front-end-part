import React from 'react';
import './Footer.css'
import logo from "../../../public/image/h-removebg-preview.png";
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="about">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;