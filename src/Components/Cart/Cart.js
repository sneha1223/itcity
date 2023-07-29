import React from 'react'
import './Cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCarts, removeItem } from '../../Store/cartSlice';
import { thumbImgUrl } from '../../Constants';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Cart() {
  const dispatch = useDispatch();
  const cartItem = useSelector(getAllCarts);
  console.log("cart item", cartItem);

  return (
    <div className='main-cart'>
      {cartItem.map((val) => {
        return (
          <div>
            <Row>
              <Col xs={12} md={6}>
                <img className='cart-img' src={thumbImgUrl + val.product_image} alt='' />
              </Col>

              <Col xs={12} md={6} className='mt-4'>
                <h3 className='cart-name'>{val.product_name} </h3>
                <h3 className='cart-price'>Total Price: {val.totalPrice.toFixed(3)} KWD  </h3>
                <h4 style={{ display: "flex" }}>Quatity:{val.product_qty}</h4>
                <div className='buttons'>
                <button onClick={() =>
                  dispatch(removeItem(val.id))} className='remove-btn'>Remove </button>
                 </div>
                
              </Col>
            </Row>
          </div>
        )
      })}
       <Link to='/order'>
                  <button className='proceed-btn'>Proceed To Buy</button>
                  </Link>
                
    </div>
  )
}

export default Cart