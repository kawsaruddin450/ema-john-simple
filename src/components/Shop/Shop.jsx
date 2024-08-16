// import React from 'react';
import { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link, useLoaderData } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const { totalProducts } = useLoaderData();
    const itemsPerPage = 10;
    const totalPages = Math.ceil(totalProducts / itemsPerPage);
    const pageNumbers = [...Array(totalPages).keys()];

    const handleAddToCart = (product) => {
        // console.log('Added to Cart', product._id);
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product._id);
    }
    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        for (const id in storedCart) {
            const savedProduct = products.find(product => product._id === id);
            if (savedProduct) {
                const quantity = storedCart[id];
                savedProduct.quantity = quantity;
                savedCart.push(savedProduct);
            }
        }
        setCart(savedCart);
    }, [products])
    return (
        <>
            <div className='shop-container'>
                <div className="products-container">
                    {
                        products.map(product => <Product key={product._id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart
                        cart={cart}
                        handleClearCart={handleClearCart}
                    >
                        <Link to="/orders">
                            <button className='review-order-btn'>Review Order <FontAwesomeIcon icon={faArrowRight} /></button>
                        </Link>
                    </Cart>
                </div>
            </div>
            {/* Pagination */}
            <div className='pagination'>
                {
                    pageNumbers.map(number => <button
                         key={number}
                         onClick={()=> setCurrentPage(number + 1)}
                    >{number + 1}</button>)
                }
                <h4>Current Page: {currentPage}</h4>
            </div>
        </>
    );
};

export default Shop;