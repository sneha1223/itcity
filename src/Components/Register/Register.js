import axios from 'axios'
import React, { useState } from 'react'
import './Register.css'

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    })
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value, })
        event.preventDefault();
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://itcity.tectuz.com/api/register', formData)
            .then(response => {
                console.log("response", response.data)
            })
            .catch(error => {
                console.log("error", error);
            })
    }
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleBlur = () => {
        if (password.length < 6) {
            setErrorMessage('Password should be at least 6 characters long');
            setPassword();
        } else {
            setErrorMessage('');
        }
    }

    return (
        <center>
            <h2>Login </h2>
            <div className='register shadow p-5'>
                <form onSubmit={handleSubmit} className='form-div'>
                    <input
                        className='login'
                        type='text'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        placeholder='Name'
                    /><br />
                    <input
                        className='login'
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='Email'
                    /><br />
                    <input
                        className='login'
                        type='password'
                        name='password'
                        value={formData.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder='Password'
                    /><br />
                    {errorMessage && <p>{errorMessage}</p>}
                    {/* <Link to='/'> */}
                    <button className='login-btn'>Login</button>
                    {/* </Link> */}
                </form>
            </div>
        </center>
    )
}

export default Register


