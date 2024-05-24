import React, { useContext, useState, useEffect } from "react";
import { ProductContext } from "../../Main/Main";
import "./Product.css";
import { IoCartOutline, IoEyeOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

const Product = () => {
  const { products } = useContext(ProductContext);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const filterProduct = (category) => {
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      const updatedProducts = products.filter((product) => product.cat === category);
      setFilteredProducts(updatedProducts);
    }
  };

  return (
    <div>
      <div className="product_detail">
        <div className="container">
          <div className="productbox">
            
          </div>
        </div>
      </div>
      <div className="products">
      <h2># Products</h2>
      <p>Home.Products</p>
        <div className="container">
          <div className="filter">
            <div className="categories">
              <h3>Categories</h3>
              <ul>
                <li onClick={() => filterProduct("All")}>All Products</li>
                <li onClick={() => filterProduct("Man")}>Man</li>
                <li onClick={() => filterProduct("Woman")}>Woman</li>
                <li onClick={() => filterProduct("Children")}>Children</li>
              </ul>
            </div>
          </div>
          <div className="productbox">
            <div className="contant">
              {filteredProducts.map((curElm) => (
                <div className="box" key={curElm.id}>
                  <div className="img_box">
                    <img src={curElm.Img} alt={curElm.Title} />
                    <div className="icon">
                      <li><IoCartOutline /></li>
                      <li><IoEyeOutline /></li>
                      <li><FaRegHeart /></li>
                    </div>
                  </div>
                  <div className="detail">
                    <p>{curElm.cat}</p>
                    <h3>{curElm.Title}</h3>
                    <h4>{curElm.price}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
