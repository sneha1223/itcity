import React from 'react'
import './Cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCarts, removeItem } from '../../Store/cartSlice';
import { thumbImgUrl } from '../../Constants';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Cart() {
  const dispatch = useDispatch();
  const cartItem = useSelector(getAllCarts);
  console.log("cart item", cartItem);

  return (
    <div>
      <div class='container'>
        <div class='row'>
          <div class='img-col1 mt-5 col-6'>
            {cartItem.map((val) => {
              return (
                <>
                  <Card className='mt-4'>
                    <div class='img-col d-flex text-center'>
                      <img src={thumbImgUrl + val.product_image} alt='' />
                    </div>
                    <div>
                      <h2>{val.product_name} </h2>
                      <h4>Qty: {val.product_qty} </h4>
                      <h4> Total Price: {val.totalPrice.toFixed(3)} KWD </h4>
                      <button onClick={() =>
                        dispatch(removeItem(val.id))} className='remove-btn'>Remove </button>
                    </div>
                  </Card>
                </>
              )
            })}

          </div>

          <div class="img_col2 mt-5 col-6">

            {cartItem.map((val) => {
              return (
                <div>
                  <h3>Summary</h3>
                  <table>
                    <tbody>
                      <tr>
                        <td>Actual Amount: </td>
                        <td>{val.product_price} </td>
                      </tr>

                      <tr>
                        <td>Estm Amount: </td>
                        <td>{val.product_price_offer} </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )
            })}
            <Link to='/order'> <button>Proceed to Buy</button></Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Cart