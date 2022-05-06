import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div >
            <h1 className='products-title'> Inventory items  </h1>
            <div className="row">
                <div className="products-container">
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                        >

                        </Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;