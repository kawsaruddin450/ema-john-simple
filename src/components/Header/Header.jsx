import React, { useContext } from 'react';
import logo from '../../images/Logo.svg'
import './header.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Header = () => {
    const { logOut, user } = useContext(AuthContext);
    
    const handleSignOut = () => {
        logOut()
        .then(result => {
            return;
        })
        .catch(error => {
            console.log(error.message);
        })
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="inventory">Inventory</Link>
                <Link to="login">Login</Link>
                <Link to="/signup">Sign Up</Link>
                {
                    user && <button onClick={handleSignOut}>Sign Out</button>
                }
            </div>
        </nav>
    );
};

export default Header;