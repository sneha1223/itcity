import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchAsychsearch, getSearchResults } from "../../Redux/searchSlice";
// import { thumbimgURL } from "../../url/Url";
import { thumbimgURL } from "../../Utils/Api/Imageapi";
import { Button,Container,Row,Col } from "react-bootstrap";

function Searchpage(){
    const dispatch=useDispatch();
    const{searchterm}=useParams();
    console.log("useparams serchterm=",searchterm)

    useEffect(()=>{
        dispatch(fetchAsychsearch({searchterm:searchterm}))
    },[searchterm])

    const searchProducts=useSelector(getSearchResults);
    console.log("searchProducts",searchProducts);

    if (searchProducts.length === 0) {
        return (
          <div className='container' style={{
            minHeight: "70vh"
          }}>
            <div className='fw-5 text-danger py-5'>
              <h3>{("No Products found")}</h3>
            </div>
          </div>
        )
      }
      return(
        <main>
        <div className='search-content bg-whitesmoke'>
          <div className='container'>
            <div className='py-5'>
              <div className='title-md'>
                <h3>{("Search results")}:</h3>
              </div>
              <Row>
                {searchProducts.map((product, index) => {
                  return (
  
                    <Col xs={12} sm={6} md={4} lg={3} >
                      <Link style={{ textDecoration: "none", color: "black" }} to={`/product/${product.product_id}`} >
                        <div className='newdesign'>
                          <img src={thumbimgURL + product?.product_image} alt="" />
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
      </main>
      )
   

}
export default Searchpage;