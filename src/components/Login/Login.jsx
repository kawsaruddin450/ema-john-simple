import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='form-container'>
            <h1 className='form-title'>Login</h1>
            <form>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" required />
                </div>
                <div className="form-control">
                    <input type="submit" value="Login" id='login-btn'/>
                    <p className='redirect-text'>New to Ema-John? <span><Link to='/signup'>Create New Account</Link></span></p>
                </div>
            </form>
        </div>
    );
};

export default Login;