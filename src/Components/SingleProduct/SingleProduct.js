import React, { useEffect, useState } from 'react'
import './SingleProduct.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingleProduct, getSingleProduct } from '../../Store/categorySlice';
import { useParams } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import { thumbImgUrl } from '../../Constants';
import { Link } from 'react-router-dom';
import { addToCart } from '../../Store/cartSlice';

function SingleProduct() {

    const [productQty, setProductQty] = useState(1);

    const dispatch = useDispatch();
    const singleProduct = useSelector(getSingleProduct);
    console.log("single Product", singleProduct)
    const { product_id } = useParams();

    useEffect(() => {
        dispatch(fetchSingleProduct(product_id))
    }, [dispatch, product_id])

    // product decrement 
    const decreaseProductQty = () => {
        setProductQty((prevQty) => {
            let tempQty = prevQty - 1;
            if (tempQty < 1) tempQty = 1;
            return tempQty;
        });
    };

    // product increment
    const increaseProductQty = () => {
        setProductQty((prevQty) => {
            let tempQty = prevQty + 1;
            if (tempQty > singleProduct?.stock) tempQty = singleProduct?.stock;
            return tempQty;
        });
    };

    const addToCartHandler = (ProductSingle) => {
        let totalPrice = productQty * ProductSingle?.product_price_offer;
        dispatch(addToCart({ ...ProductSingle, product_qty: productQty, totalPrice: totalPrice }));
    }



    return (
        <div>
            <div class="container">
                <div class="row">
                    {singleProduct.map((val) => {
                        return (
                            <div>
                                <Link className='linkStyle' to={`/product/${val.product_id}`} key={val?.id}>
                                    <div class="col-6">
                                        <Card style={{ width: '18rem'}} >
                                            <Card.Img  variant="top" src={thumbImgUrl + val.product_image} />
                                            <Card.Text><h1 className='product-name'>{val.product_name} </h1></Card.Text>
                                            <Card.Text><h2 className='price' style={{ textDecoration: "line-through" }}>${val.product_price.toFixed(3)}/- </h2></Card.Text>
                                            <Card.Text><h2 className='price'>${val.product_price_offer.toFixed(3)}/- </h2></Card.Text>
                                        </Card>
                                    </div>
                                </Link>
                            
                    <div class='col-6'>
                        <h2 className='quantity'>Quantity</h2>
                        <div className='cart'>
                            <button className='activity' onClick={decreaseProductQty}>-</button>
                            <h2 style={{ marginLeft: "10px" }}> {productQty} </h2>
                            <button className='activity' onClick={increaseProductQty}>+</button>
                            </div>
                            <Link to='/cart'><Button className='cart-btn1' onClick={() => {addToCartHandler(val)}}  >Add to Cart</Button> </Link>
                       </div>
                       </div>
         
               
                        )
                    })}
                </div>
            </div>
        </div>


    )
}

export default SingleProduct



