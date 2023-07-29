import React, { useEffect } from 'react'
import './Search.css'
import { useDispatch, useSelector } from 'react-redux'
import { getSearchterm, fetchAsyncSearch} from '../../Store/searchSlice'
import { Navbar,Form,Row,Col,Button } from 'react-bootstrap'
import { useParams,Link } from 'react-router-dom'
import { thumbImgUrl } from '../../Constants'

function Search() {
    const dispatch = useDispatch()
    
    const {searchterm} = useParams();
    console.log("useparams searchterm=",searchterm);

    useEffect(()=>{
        dispatch(fetchAsyncSearch({searchterm:searchterm}))
    },[searchterm])

    const searchItem = useSelector(getSearchterm)
    console.log(searchItem,"searchItem");

    // if (searchItem.length === 0) {
    //     return (
    //         <div>
    //           <div className=''>
    //             <p>{("No Products found")}</p>
    //           </div>
    //         </div>
    //       )
    //     }
        return (
    <div>
         <Navbar className=" justify-content-between">
     <Form inline>
        <Row>
          <Col xs="auto">
          <Form.Control
            type="text"
            placeholder="Search"
            fill="#0000"
            className="search-input mr-sm-2"
        /> 
        {/* <svg 
        xmlns="http://www.w3.org/2000/svg" 
        height="1em" 
        viewBox="0 0 512 512" 
        className="search-icon">
        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
      </svg>     */}

       {searchItem.map((items)=>{
               return (
                <div>
                    <Link to={`/product/${items.product_id}`}>
                    <div className='newdesign'>
                          <img src={thumbImgUrl + items?.product_image} alt="" />
                          <p style={{ fontWeight: ' 600', fontSize: '14px', marginBottom: '0.5rem' }}>{items?.product_name}</p>
                          <p style={{ fontSize: '18px', marginBottom: "4px", color: "#f5831a" }} className="  ">{items?.product_price_offer.toFixed(3)}</p>
                          <div className="font-body"><span style={{ MarginBottom: '4px', textDecoration: "line-through", fontSize: '14px' }} className=" ">{items?.product_price.toFixed(3)}</span>
                          <span className="" style={{ background: '#f5831a', padding: '3px 3px', fontSize: "12px", color: "white" }}>27%</span></div>
                         
                    </div>
                      
                    </Link>
                </div>
               )
             })} 
       
          </Col>
          <Col xs="auto">
          <button>Search</button>

          </Col>
        </Row>
      </Form>
    </Navbar>


{/* <main>
        <div className='search-content bg-whitesmoke'>
          <div className='container'>
            <div className='py-5'>
              <div className='title-md'>
                <h3>{("Search results")}:</h3>
              </div>
              <Row>
                {searchItem.map((product, index) => {
                  return (
  
                    <Col xs={12} sm={6} md={4} lg={3} >
                      <Link style={{ textDecoration: "none", color: "black" }} to={`/product/${product.product_id}`} >
                        <div className='newdesign'>
                          <img src={thumbImgUrl + product?.product_image} alt="" />
                          <p style={{ fontWeight: ' 600', fontSize: '14px', marginBottom: '0.5rem' }}>{product?.product_name}</p>
                          <p style={{ fontSize: '18px', marginBottom: "4px", color: "#f5831a" }} className="  ">{product?.product_price_offer.toFixed(3)}</p>
                          <div className="font-body"><span style={{ MarginBottom: '4px', textDecoration: "line-through", fontSize: '14px' }} className=" ">{product?.product_price.toFixed(3)}</span>
                            <span className="" style={{ background: '#f5831a', padding: '3px 3px', fontSize: "12px", color: "white" }}>27%</span></div>
                          <Button className='w-100 newbtn'>{("View")}</Button>
                        </div>
                      </Link> </Col>
  
                  )
                })
                }
  
              </Row>
  
  
            </div>
          </div>
        </div>
      </main> */}
    </div>
  )
}


export default Search