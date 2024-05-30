import React, { useContext } from 'react';
import { ProductContext } from '../../Main/Main';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './AddToCartPage.css'

const AddToCartPage = () => {
  const { cart,setCart } = useContext(ProductContext);
  return (
    <div>
      <div className="cartContainer">
        {
          cart.length ===0 &&
          <div className="emptyCart">
          <h2 className='empty'>Cart Is Empty</h2>
          <Link to="/product" className='emptyCartBtn'>Shop Now</Link>
          </div>
        }
        <div className="content">
          {
            cart.map((curElm) =>{
              return(
                <div className="cart_item" key={curElm.id}>
                  <div className="img_box">
                    <img src={curElm.img} alt="" />
                  </div>
                  <div className='detail'>
                    <h4>{curElm.cat}</h4>
                    <h3>{curElm.Title}</h3>
                    <p>{curElm.price}</p>
                    <button><AiOutlineClockCircle/></button>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>
    </div>
  );
};

export default AddToCartPage;