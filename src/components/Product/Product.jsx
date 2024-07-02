import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name, price, seller, ratings, img} = props.product;
    const handleAddToCart = props.handleAddToCart;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h2 className='price-title'>Price: ${price}</h2>
            <p>Manufacturer: {seller}</p>
            <p>Rating: {ratings} Star</p>
            <button onClick={()=> handleAddToCart(props.product)} className='product-cart-btn'>Add to Cart</button>
        </div>
    );
};

export default Product;