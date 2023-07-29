import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Mobiles.css'
import { fetchAsyncMobiles, getMobileProduct } from '../../Store/productSlice'
import ReactOwlCarousel from 'react-owl-carousel'
import { thumbImgUrl } from '../../Constants'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

function Mobiles() {
    const dispatch = useDispatch()

     const mobiles = useSelector(getMobileProduct)
     console.log("mobile", mobiles)

     useEffect(()=>{
        dispatch(fetchAsyncMobiles(getMobileProduct))
     },[dispatch])
  return (
    <div>
        <h2 className='cat-heading'>Mobile Phones</h2>
        <ReactOwlCarousel
        loop
        autoplay
        items={4}
        dots={true}
        smartSpeed={1000}
        // autoplaySpeed={800}
        slideSpeed={200}
        margin={10}
        responsive={{
          0: {
            items: 2, // Display 2 items in a single window for smaller screens
          },
          576: {
            items: 4, // Display 4 items in a single window for screens >= 576px
          },
          768: {
            items: 6, // Display 6 items in a single window for screens >= 768px
          },
        }}
      >
        {mobiles.map((value,index)=>{
            return (
                <div key={index} className='product-box'>
               <Link className='link-products' to={`/product/${value.product_id}`}>
              <div className="product-image">
                <img src={thumbImgUrl + value.product_image} alt={value.product_name} />
              </div>
              <div className="product-details">
                <p>{value.product_name}</p>
                <Button variant="primary" className="view-button">View</Button>
              </div>
              </Link>
                </div>
            )
        })}
            </ReactOwlCarousel>
    </div>
  )
}

export default Mobiles