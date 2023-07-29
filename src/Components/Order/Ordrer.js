import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCarts } from '../../Store/cartSlice'
import { Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Order.css'
import { clearcart } from '../../Store/cartSlice';
import { thumbImgUrl } from '../../Constants';

function Ordrer() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const price = useSelector(getAllCarts)
  console.log("price", price)

  const handleOnClick = () => {
    dispatch(clearcart())
    navigate('/')
  }

  return (
    <div>
      <Row>
        <Col xs={12} md={4}>
          <h3 className='heads'>Shipping Address</h3>
          <div className='shipping'>
            <input className="inputs" type='text' placeholder='customer Name' />
            <input className="inputs" type='email' placeholder='Email Address' />
            <input className="inputs" type='number' placeholder='Mobile Number' />
            <input className="inputs" type='text' placeholder='Address' />
            <input className="inputs" type='text' placeholder='Place/Area' />
            <input className="inputs" type='text' placeholder='Country' max={2} />
            <input className="inputs" type='text' placeholder='Remarks(optional)' />
          </div>
        </Col>

        <Col xs={12} md={4}>
          <h3 className='heads'>Payment Method</h3>
          <div class="form-check mt-3">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
            <label clasus="form-check-label" for="flexRadioDefault1">

              Cash on Delivery
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label class="form-check-label" for="flexRadioDefault1">
                  KNET,or credit card
                  right at your doorstep!
                </label>
              </div>
            </label>
          </div>

          <h3 className='heads'>Checkout Options</h3>
          <div class="form-check mt-3">
            <input type="checkbox" class="form-check-input" id="check1" name="option1" value="something" />
            <label class="form-check-label" for="check1">Guest Checkout</label>
          </div>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="check2" name="option2" value="something" />
            <label class="form-check-label" for="check2">Create an account for later use</label>
          </div>

          <div class="btn_style mt-4">
            <button className='button-order' onClick={handleOnClick}>Complete Shopping </button>
            <Link to='/'>
              <button className='button-order'>Continue Shopping</button>
            </Link>
          </div>

        </Col>

        <Col xs={12} md={4}>
          <h3 className='heads'>Order Summary</h3>
          {price.map((ele)=> {
            return (
              <div>
              </div>
            )
          })}
         
        <Row>
            <Col xs={12} md={3}>
             <h5>Image</h5>
         </Col>

         <Col xs={12} md={3}>
          <h5>Name</h5>
         </Col>

         <Col xs={12} md={3}>
          <h5>Quantity</h5>
         </Col>

         <Col xs={12} md={3}>
          <h5>Price</h5>
         </Col>
          </Row>
              {price.map((ele) => {
                return (
                  <div>
                   <Row>
                      <Col xs={12} md={3}>
                      <img src={thumbImgUrl + ele.product_image} style={{width:"90px"}} />
                    </Col>
                      <Col xs={12} md={3}>
                      <p>{ele.product_name}</p>
                      </Col>
                      <Col xs={12} md={3}>
                       <p>x{ele.product_qty}</p>
                      </Col>
                      <Col xs={12} md={3}>
                       <p>{ele.totalPrice.toFixed((3))}</p>
                       </Col> 
                    </Row>
                  </div>
                )
              })}
          <h3 className='heads'>Shipping Charge: 1.00 KWD</h3>
          {/* <p>Total Price: <b>{totalPrice.toFixed((3))}</b> KWD</p> */}
        </Col>
        </Row>

    </div>
  )
}

export default Ordrer



