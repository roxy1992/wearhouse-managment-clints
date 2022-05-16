import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = ({ product }) => {
    const { _id, name, img, description, price, quantity } = product;
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/product/${id}`);
    }
    return (
        <div id='inventory' className='product'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <p>Stock: {quantity}</p>
            <button onClick={() => navigateToServiceDetail(_id)} navigateToProductDetail className='btn btn-primary'>Update</button>
        </div>
    );
};

export default Product;