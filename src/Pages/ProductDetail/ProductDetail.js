import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `https://gentle-springs-06548.herokuapp.com/service/${productId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));

    }, [])

    return (
        <div >
            <div className='text-center'>
                <img src={product.img} alt="" />
                <h2>{product.name} </h2>
                <h4>Price : {product.price}</h4>
                <Link to="/manageproducts">
                    <button className='btn btn-primary'>Manage Product</button>
                </Link>
            </div>
        </div>
    );
};

export default ProductDetail;