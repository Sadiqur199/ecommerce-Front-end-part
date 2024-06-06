import React, { useContext, useState, useEffect } from "react";
import { ProductContext } from "../../Main/Main";
import "./Product.css";
import { IoCartOutline, IoEyeOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { useAuth0 } from "@auth0/auth0-react";


const Product = () => {
  const { products, detail, view,close,setClose,addtocart } = useContext(ProductContext);
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
  const { loginWithRedirect,isAuthenticated, isLoading } = useAuth0();

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
                  <h3>${curElm.Price}</h3>
                  <button onClick={()=>addtocart(curElm)}>Add To Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
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
                      {
                        isAuthenticated ?
                        <li onClick={()=>addtocart(curElm)}><IoCartOutline /></li>:
                        <li onClick={()=>alert('Login First')}><IoCartOutline /></li>
                      }
                      <li onClick={() => view(curElm)}><IoEyeOutline /></li>
                      <li><FaRegHeart /></li>
                    </div>
                  </div>
                  <div className="detail">
                    <p>{curElm.cat}</p>
                    <h3>{curElm.Title}</h3>
                    <h4>${curElm.price}</h4>
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
