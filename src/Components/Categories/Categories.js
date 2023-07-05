import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProduct, getAllProduct } from '../../Store/categorySlice'
import { Card, Button } from 'react-bootstrap'
import { thumbImgUrl } from '../../Constants'
import { Link, useParams } from 'react-router-dom'
import './Categories.css'

import { fetchAsyncBrandCategories, setSelectedData } from '../../Store/brandSlice'
import BrandFilter from '../BrandFilter/BrandFilter'


const Categories = () => {

  const dispatch = useDispatch();

  const allProduct = useSelector(getAllProduct);
  console.log("All Product", allProduct);

  const { category_id } = useParams();

  useEffect(() => {
    dispatch(fetchAllProduct(category_id))
  }, [dispatch, category_id]);

  const selectedBrands = useSelector((state) => state.brands.selectedBrands)
  console.log(selectedBrands);

  useEffect(() => {
    dispatch(fetchAsyncBrandCategories(category_id));
  }, [dispatch, category_id])

  const selectedData = useSelector((state) => state.brands.selectedData)
  console.log("selectedData", selectedData)

  useEffect(() => {
    dispatch(setSelectedData(allProduct.filter(item => selectedBrands.includes(parseInt(item.product_brand)))))
  }, [selectedBrands,dispatch,allProduct])


  return (
    <div class="container">
      <div class="row w-100" >
        <div class="col-2">
          <BrandFilter />
        </div>
        <div class="col-10 mt-4 main-div ">
          <div className='wrap-product'>
            {selectedData.length > 0 ? (
              <div className='colu2'>
                {selectedData.map((val) => {
                  return (
                    <div>
                      <Link className='linkStyle' to={`/product/${val.product_id}`} key={val?.id}>
                        <Card style={{ width: '19rem' }} className='mt-4'>
                          <Card.Img variant="top" src={thumbImgUrl + val.product_image} />
                          <Card.Body>

                            <Card.Title className='product-name'>{val.product_name}</Card.Title>
                            <Card.Text className='offer_price' style={{ textAlign: "center" }}>KWD {val.product_price_offer.toFixed(3)}</Card.Text>
                            <Card.Text className='price' style={{ textAlign: "center", textDecoration: "line-through" }}>KWD {val.product_price.toFixed(3)}</Card.Text>
                            <div className='btnnnn'>
                              <Button className='btn1' variant="primary">View</Button>
                            </div>
                          </Card.Body>
                        </Card>
                      </Link>
                    </div>
                  )
                })}
              </div>
            ) : (
              <div className='colu2'>
                {allProduct.map((val) => {
                  return (
                    <div>
                      <Link className='linkStyle' to={`/product/${val.product_id}`} key={val?.id}>
                        <Card style={{ width: '19rem' }}>
                          <Card.Img variant="top" src={thumbImgUrl + val.product_image} />
                          <Card.Body>
                            <Card.Title>{val.product_name}</Card.Title>
                            <Card.Text className='offer_price' style={{ textAlign: "center" }}>KWD {val.product_price_offer.toFixed(3)}</Card.Text>
                            <Card.Text>{val.country}<span style={{ textAlign: "center", textDecoration: "line-through" }}>{val.product_price.toFixed(3)}</span> </Card.Text>
                            <Button className='btn1' variant="primary">View</Button>
                          </Card.Body>
                        </Card>
                      </Link>
                    </div>
                  )
                })}
              </div>
            )
            }
          </div>
        </div>

      </div>

    </div>
    //  </div>
  )
}

export default Categories