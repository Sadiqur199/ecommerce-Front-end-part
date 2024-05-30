import React, { useContext } from 'react';
import { ProductContext } from '../../Main/Main';
import {  AiOutlineCloseCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './AddToCartPage.css'

const AddToCartPage = () => {
  const { cart,setCart } = useContext(ProductContext);

  const incqty = (product) => {
    const exist = cart.find((x)=>{
      return x.id === product.id
    })
    setCart(cart.map((curElm) =>{
      return curElm.id === product.id?{...exist, qty: exist.qty+1}:curElm
    }))
  }
  const decqty = (product) => {
    const exist = cart.find((x)=>{
      return x.id === product.id
    })
    setCart(cart.map((curElm) =>{
      return curElm.id === product.id?{...exist, qty: exist.qty-1}:curElm
    }))
  }
  // remove Product 
  const removeProduct = (product) => {
    const exist = cart.find((x)=>{
      return x.id === product.id
    })
    if(exist.qty>0){
      setCart(cart.filter((x) =>{
        return x.id !== product.id
      }))
    }
  }
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
                    <img src={curElm.Img} alt="" />
                  </div>
                  <div className='detail'>
                    <h4>{curElm.cat}</h4>
                    <h3>{curElm.Title}</h3>
                    <p>{curElm.price}</p>
                    <div className="qty">
                      <button onClick={() =>incqty(curElm)} className='incqty'>+</button>
                      <input type="text" value={curElm.qty}/>
                      <button onClick={() =>decqty(curElm)}className='decqty'>-</button>
                    </div>
                    <h4>Sub Total:${curElm.price * curElm.qty}</h4>
                    <button onClick={() =>removeProduct(curElm)}><AiOutlineCloseCircle/></button>
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