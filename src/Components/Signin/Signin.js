import React from 'react'
import './Signin.css'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getToken, login } from '../../Store/authSlice'

const Signin = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const token = useSelector(getToken)
    console.log("token",token);

    const handleSubmit = (event) =>{
        event.preventDefault();
    const customer_email = event.target.customer_email.value;
    const password = event.target.password.value;
     try{
        dispatch(login({customer_email:customer_email,password:password}))
        navigate('/userDetails');
     } 
     catch(error) {
        console.error(error);
     }
    };

    return (
        <center>
            <div className='sign-div p-4' >
                <form className='signin-form'onSubmit={handleSubmit}>
                    <input
                        className='signin'
                        type='email'
                        name='name'
                        placeholder='Username,Phone Number or Email Address'
                    />
                    <input
                        className='signin'
                        type='password'
                        name='password'
                        placeholder='Password'
                    />
                
                    {/* <Button className='signin-btn' variant="contained">Login</Button> */}
                    
                    <button className='signin-btn'>Sign In</button>
                </form>

                <p>Don't You have an account?<Link to='/register'> Sign Up</Link>  </p>
        
                
            </div>
        </center>
    )
}

export default Signin