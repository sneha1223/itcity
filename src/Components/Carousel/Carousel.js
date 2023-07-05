import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoriesCarousel, fetchAsyncarousel } from '../../Store/categorySlice';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { imageUrl } from '../../Constants';

const Banner = () => {

  const dispatch = useDispatch();
  const carousel = useSelector(getCategoriesCarousel);
  console.log("carousel", carousel);

  useEffect(() => {
    dispatch(fetchAsyncarousel(getCategoriesCarousel))
  }, [dispatch]);

  return (
    <div>
      {carousel.map((val, index) => {
        return (
          <div>
            <img src={imageUrl + val.img_name} alt=''></img>
          </div>
        )
      })
      }
    </div>
  )
}

export default Banner