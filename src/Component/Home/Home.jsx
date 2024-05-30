import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import "./Home.css";
import image1 from "../../../public/image/image-removebg-preview (5).png";
import image2 from "../../../public/image/1p.png";
import image3 from "../../../public/image/2p.png";
import image4 from "../../../public/image/3p.png";
import { FiTruck } from "react-icons/fi";
import { CiDollar } from "react-icons/ci";
import {
  BsArrowBarRight,
  BsArrowRight,
  BsCurrencyDollar,
  BsPercent,
} from "react-icons/bs";
import { FaHeadphones } from "react-icons/fa6";
import HomeProduct from "../HomeProduct/HomeProduct";
import { IoCartOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { ProductContext } from "../../Main/Main";
import { RxCrossCircled } from "react-icons/rx";

const Home = () => {
  const [homeProduct, setHomeProduct] = useState(HomeProduct);
  const { products, detail, view, close, setClose ,addtocart} =
    useContext(ProductContext);

  console.log(homeProduct);
  return (
    <div>
            {close && detail.length > 0 && (
        <div className="product_detail">
          <div className="container">
           <button onClick={()=>setClose(false)} className="closebtn"> <RxCrossCircled /></button>
            {detail.map((curElm) => (
              <div className="productbox" key={curElm.id}>
                <div className="img_box">
                  <img src={curElm.Img} alt="" />
                </div>
                <div className="detail">
                  <h4>{curElm.cat}</h4>
                  <h2>{curElm.Title}</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, inventore. Eligendi cum nobis impedit, ipsa ducimus officia harum veniam cupiditate.
                  </p>
                  <h3>{curElm.Price}</h3>
                  <button>Add To Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="top_banner">
        <div className="container">
          <div className="detail">
            <h2>The Best Dress Collection 2024</h2>
            <Link className="link" to="/product">
              Shop Now <FaArrowRightLong />
            </Link>
          </div>
          <div className="img_box">
            <img src={image1} alt="Dress" />
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
      <div className="product">
        <h2>Top Products</h2>
        <div className="container">
          {homeProduct.map((curElm) => {
            return (
              <>
                <div className="box" key={curElm.id}>
                  <div className="img_box">
                    <img src={curElm.Img} alt={curElm.Title} />
                    <div className="icon">
                      <li onClick={()=>addtocart(curElm)}>
                        {" "}
                        <IoCartOutline />
                      </li>
                      <li onClick={() => view(curElm)}>
                        {" "}
                        <IoEyeOutline />
                      </li>
                      <li>
                        {" "}
                        <FaRegHeart />
                      </li>
                    </div>
                  </div>
                  <div className="detail">
                    <p>{curElm.cat}</p>
                    <h3>{curElm.Title}</h3>
                    <h4>{curElm.price}</h4>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="banner">
        <div className="container">
          <div className="detail">
            <h4>LATEST FASION ADDED</h4>
            <h3>Winter Jacket For Men</h3>
            <p>$ 986</p>
            <Link to="/" className="link">
              Shop Now
              <BsArrowRight />{" "}
            </Link>
          </div>
          <div className="img_box">
            <img
              src="https://i.ibb.co/nCcXgMC/image-removebg-preview-7.png"
              alt="Winter Collection"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
