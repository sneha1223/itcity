import React from 'react';
import './App.css';
import Topbar from './Components/Navbar/Topbar';
import { Routes, Route } from 'react-router-dom';
import Categories from './Components/Categories/Categories';
import Banner from './Components/Carousel/Carousel';
import SingleProduct from './Components/SingleProduct/SingleProduct';
import Cart from './Components/Cart/Cart';
import Ordrer from './Components/Order/Ordrer';
import Register from './Components/Register/Register';
import Signin from './Components/Signin/Signin';
import Login from './Components/Login/Login';
import UserDetails from './Components/UserDetails/UserDetails';
import Top from './Components/Navbar/Top'
// import Cat from './Components/Categories/Cat';


function App() {
  return (
    <div className="App">
      {/* <Topbar /> */}
      <Top />
      
      <Routes>
        <Route path='/' element={<Banner /> }></Route>
        <Route path='/category/:category_id' element={<Categories />}></Route>
        {/* <Route path='/category/:category_id' element={<Cat />}></Route> */}
        <Route path='/product/:product_id' element={<SingleProduct />}></Route>
        <Route path='/cart' element={ <Cart />}></Route>
        <Route path='/order' element={<Ordrer />}></Route>
        <Route path='/register' element={ <Register /> }></Route>
        <Route path='/signin' element={ <Signin />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/userDetails' element={ <UserDetails /> }></Route>
      </Routes>

    </div>
  );
}

export default App;
