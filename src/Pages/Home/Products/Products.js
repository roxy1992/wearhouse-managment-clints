import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://gentle-springs-06548.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div className="card container" >
            <h1 className='products-title'> Inventory items  </h1>
            <div className="row ">
                <div className="products-container">
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                        >
                        </Product>)
                    }
                </div>
            </div>
            <div className='mt-2'>
                <button variant="outline-primary"><Link to='/allproducts'>More Inventory</Link></button>

            </div>
        </div>
    );
};

export default Products;