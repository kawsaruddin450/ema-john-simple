import React, { useContext, useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const SignUp = () => {
    const [show, setShow] = useState(false);
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleSignUp = event => {
        setError('');
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirm.value;
        console.log(email, password, confirmPassword)

        if(password !== confirmPassword){
            setError("Password didn't match! Please try again.")
            return;
        }
        createUser(email, password)
        .then(result => {
            const newUser = result.user;
            form.reset();
        })
        .catch(error => {
            setError(error.message);
        })
    }


    return (
        <div className='form-container'>
            <h1 className='form-title'>Sign Up</h1>
            <form onSubmit={handleSignUp}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type={show ? "text" : "password"} name="password" id="password" required />
                    <p onClick={()=> setShow(!show)}><small>
                        {
                            show ? <span>Hide Password</span> :
                            <span>Show Password</span>
                        }    
                    </small></p>
                </div>
                <div className="form-control" id='confirm-cntrl'>
                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" name="confirm" id="" required />
                </div>
                <div className="form-control">
                    <input type="submit" value="Sign Up" id='login-btn'/>
                    <p className='redirect-text'>Already have an account? <span><Link to='/login'>Please Login</Link></span></p>
                    <p className="text-error">{error}</p>
                </div>
            </form>
        </div>
    );
};

export default SignUp;