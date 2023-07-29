import React, { useEffect } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Form,FormControl } from 'react-bootstrap'
import './Topbar.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncategories, getCategoriesnav } from '../../Store/categorySlice'
import { getAllCarts } from '../../Store/cartSlice'
import Search from '../Search/Search'

const Topbar = () => {

  const dispatch = useDispatch();
  const categories = useSelector(getCategoriesnav);
  console.log("CategoriesNav", categories);

  useEffect(() => {
    dispatch(fetchAsyncategories(getCategoriesnav))
  }, [dispatch])

  const carts = useSelector(getAllCarts);
  console.log("carts", carts);

  const myItem = JSON.parse(localStorage.getItem('cart')) || ""
  const objlength = Object.keys(myItem).length;


  return (
    <div >
  <Navbar variant="light" expand="lg" className="navbar sticky-top topbar-main">
      <Container fluid>
      <Navbar.Brand as={Link} to="/" className="navbar-brand">
          <img src={`/images/it-city-logo.png`} alt="Logo" className="logo-image" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav nav-items">
          <Nav className="mr-auto">
            {categories.map((value, index) => (
              <Nav.Link
                as={Link}
                to={`/category/${value.cat_id}`}
                key={index}
                className="nav-link"
              >
                <span className="nav-link-texts">{value.cat_name}</span>
              </Nav.Link>
            ))}
             <Link to='/cart' className='cart-btn'>
                <svg width="42" height="30" fill="#fff" class="bi bi-cart" viewBox="0 0 16 16"  >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                {objlength ? (<div className='objlength'>{objlength} </div>) : <div className='objlength'>0</div>}
              </Link>
              <Link to='/signin'>
                <svg width="20" height="20" fill='#fff' viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>
              </Link>
             </Nav>
          {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form> */}
      <Search />
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
   
    </div>
  )
}

export default Topbar