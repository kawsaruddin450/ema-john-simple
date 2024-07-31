import React, { useContext, useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const {signInUser} = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleSignIn = event => {
        setError('');
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser(email, password)
        .then(result => {
            const loggedUser = result.user;
        })
        .catch(error => {
            setError(error.message);
        })
    }
    
    return (
        <div className='form-container'>
            <h1 className='form-title'>Login</h1>
            <form onSubmit={handleSignIn}>
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
                    <p className='text-error'>{error}</p>
                </div>
            </form>
        </div>
    );
};

export default Login;