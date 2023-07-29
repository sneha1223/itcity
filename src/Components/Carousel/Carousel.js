import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoriesCarousel, fetchAsyncarousel } from '../../Store/categorySlice';
import { Link } from 'react-router-dom';
import ReactOwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { imageUrl } from '../../Constants';
import './Carousel.css'
import { Col, Row } from 'react-bootstrap';
import Mobiles from '../../Homepages/Mobile/Mobiles';
import Accessories from '../../Homepages/Accessories/Accessories';

const Banner = () => {

  const dispatch = useDispatch();

  const carousel = useSelector(getCategoriesCarousel);
  console.log("carousel", carousel);

 useEffect(() => {
    dispatch(fetchAsyncarousel(getCategoriesCarousel))
  }, [dispatch]);


  const iconData = [
    { src: '/icons/accessories.png', title: 'Accessories' },
    { src: '/icons/camera.png', title: 'Camera' },
    { src: '/icons/computers.png', title: 'Computer' },
    { src: '/icons/home.png', title: 'Home' },
    { src: '/icons/mobile.png', title: 'Mobiles' },
    { src: '/icons/offer.png', title: 'Offer' },
    { src: '/icons/personal.png', title: 'Personal' },
    { src: '/icons/tabe.png', title: 'Tablet' },
    { src: '/icons/travel.png', title: 'Bags' },
  ]

  return (
    <div className='container-fluid' id='carousel-wrapper'>
      <ReactOwlCarousel
        loop
        autoplay
        items={1}
        dots={true}
        smartSpeed={2000}
        margin={3}>
        {carousel.map((value, index) => {
          return (
            <div key='index'>
              <Link to={`/product/${value.img_id}`}>

                <img src={imageUrl + value.img_name} alt={value.img_id}></img>
              </Link>
            </div>
          )
        })}
      </ReactOwlCarousel>
      <div className='icon-group' >
        <Row>
          <Col xs={12}md={3}>
          
          </Col>
          <Col xs={12} md={6}>
            <Row>
            {iconData.map((item, index) => (
            <Col key={index}>
              <img className='icons' src={item.src} alt='' />
              <p>{item.title}</p>
            </Col>
          ))}
            </Row>
          </Col>
          </Row>
          </div>

        <div>
          <Accessories />
          <img className='banr-img' src='/images/carousel1.jpg' alt='' />
          <Mobiles/>

        </div>

      
    </div>
  )
}

export default Banner