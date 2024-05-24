import React, { useState } from "react";
import "./Product.css";
import ProductApi from "../ProductApi/ProductApi";
import { IoCartOutline, IoEyeOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
const Product = () => {
  const[product, setProduct] = useState(ProductApi)
const filterProduct = (product) =>{
  const update = ProductApi.filter((x) =>{
    
      return x.cat === product;
  })
  setProduct(update)
}
const AllProducts = () =>{
  setProduct(ProductApi)
}

  return (
    <div>
      <h2># Products</h2>
      <p>Home.Products</p>
      <div className="products">
        <div className="container">
          <div className="filter">
            <div className="categories">
              <h3>Categories</h3>
              <ul>
                <li onClick={() => AllProducts("")}>All Products</li>
                <li onClick={() => filterProduct("Man")}>Man</li>
                <li onClick={() => filterProduct("Woman")}>Woman</li>
                <li onClick={() => filterProduct("Children")}>Children</li>
              </ul>
            </div>
          </div>
          <div className="productbox">
            <div className="contant">
              {product.map((curElm) => {
                return (
                  <>
                    <div className="box" key={curElm.id}>
                      <div className="img_box">
                        <img src={curElm.Img} alt={curElm.Title} />
                        <div className="icon">
                          <li>
                            {" "}
                            <IoCartOutline />
                          </li>
                          <li>
                            {" "}
                            <IoEyeOutline/>
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
        </div>
      </div>
    </div>
  );
};

export default Product;
