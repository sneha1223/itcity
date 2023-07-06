import React from 'react'
import './Signin.css'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

const Signin = () => {
    return (
        <center>
            <div className='sign-div p-4' >
                <form className='signin-form'>
                    <input
                        className='signin'
                        type='text'
                        name='name'
                        placeholder='Username,Phone Number or Email Address'
                    />
                    <input
                        className='signin'
                        type='password'
                        name='password'
                        placeholder='Password'
                    />
                    <Button className='signin-btn' variant="contained">Login</Button>
                    {/* <button className='signin-btn'>Sign In</button> */}
                </form>

                <p>Don't You have an account?<Link to='/register'> Sign Up</Link>  </p>
        
                
            </div>
        </center>
    )
}

export default Signin