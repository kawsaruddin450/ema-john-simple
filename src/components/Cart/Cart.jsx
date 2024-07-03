import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    let totalPrice = 0;
    let shipping = 0;
    cart.map(item => {
        totalPrice += parseFloat(item.price);
        shipping += parseFloat(item.shipping);
    })
    let tax = totalPrice*0.1;
    const grandTotal = totalPrice + shipping + tax;
    return (
        <div className='cart'>
            <h2 className='cart-title'>Order Summary</h2>
            <p>Cart Total Item: {cart.length}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h3 className='cart-total'>Grand Total: ${grandTotal}</h3>
        </div>
    );
};

export default Cart;