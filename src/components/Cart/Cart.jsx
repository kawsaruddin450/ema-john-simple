import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart, handleClearCart, children}) => {
    let totalPrice = 0;
    let shipping = 0;
    let quantity = 0;
    cart.map(item => {
        item.quantity = item.quantity || 1;
        totalPrice += parseFloat(item.price)*parseInt(item.quantity);
        shipping += parseFloat(item.shipping);
        quantity += parseInt(item.quantity);
    })
    let tax = totalPrice*0.1;
    const grandTotal = totalPrice + shipping + tax;
    return (
        <div className='cart'>
            <h2 className='cart-title'>Order Summary</h2>
            <p>Total Item: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h3 className='cart-total'>Grand Total: ${grandTotal}</h3>
            <button onClick={handleClearCart} className='clear-cart-btn'>Clear Cart <FontAwesomeIcon icon={faTrashCan} /></button>
            {children}
        </div>
    );
};

export default Cart;