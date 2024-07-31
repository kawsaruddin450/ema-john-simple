import React from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='form-container'>
            <h1 className='form-title'>Sign Up</h1>
            <form>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" required />
                </div>
                <div className="form-control" id='confirm-cntrl'>
                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" name="confirm" id="" required />
                </div>
                <div className="form-control">
                    <input type="submit" value="Sign Up" id='login-btn'/>
                    <p className='redirect-text'>Already have an account? <span><Link to='/login'>Please Login</Link></span></p>
                </div>
            </form>
        </div>
    );
};

export default SignUp;