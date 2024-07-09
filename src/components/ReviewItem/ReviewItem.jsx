import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({product}) => {
    const {id, name, img, price, quantity} = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className="review-details">
                <h4>{name}</h4>
                <p>Price: <span className='review-meta'>${price}</span></p>
                <p>Quantity: <span className='review-meta'>{quantity}</span></p>
            </div>
            <button className='btn-delete'><FontAwesomeIcon icon={faTrashCan} /></button>
        </div>
    );
};

export default ReviewItem;