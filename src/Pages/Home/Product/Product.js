import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = ({ product }) => {
    const { id, name, img, description, price } = product;
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/product/${id}`);
    }
    return (
        <div id='product' className='product'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToServiceDetail(id)} navigateToProductDetail className='btn btn-primary'>Buy: {name}</button>
        </div>
    );
};

export default Product;