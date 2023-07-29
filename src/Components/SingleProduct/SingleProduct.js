import React, { useEffect, useState } from 'react'
import './SingleProduct.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingleProduct, getSingleProduct } from '../../Store/categorySlice';
import { useParams } from 'react-router-dom';
import { Button, Col,Row } from 'react-bootstrap';
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
        <div className='product-container'>
            {singleProduct.map((val)=>{
                return(
                    
<div className='product-details'>
    <Row>
        <Col xs={1}></Col>
        <Col xs={4}>
        <div style={{ width: '25rem',marginTop: "20px", border: "none"}} >
            <img  variant="top" src={thumbImgUrl + val.product_image} alt='' />
        </div>
        </Col>

        <Col xs={6}>
        <div style={{ marginTop: "55px", border: "none",}} >
        <h1 className='single-product-name'>{val.product_name} </h1>
        <h2 className='single-price' style={{ textDecoration: "line-through" }}>KWD ${val.product_price.toFixed(3)}/- </h2>
        <h2 className='single-price-offer'>KWD ${val.product_price_offer.toFixed(3)}/- </h2>
       <Link to='/cart' style={{textDecoration:'none', display:"flex"}}>
        <Button className='single-cart-btn' onClick={() => {addToCartHandler(val)}} variant='dark'>
            Add To Cart</Button>
            </Link> 
        </div>
        <div className='cart-btn-grp'>
        <Button variant='dark' onClick={decreaseProductQty}>-</Button>
            <h2 style={{ marginLeft: "10px" }}> {productQty} </h2>
        <Button  variant='dark' onClick={increaseProductQty}>+</Button>
        </div>
        </Col>
        <Col xs={1}></Col>
    </Row>

</div>
 )
    })}
        </div>


    )
}

export default SingleProduct



