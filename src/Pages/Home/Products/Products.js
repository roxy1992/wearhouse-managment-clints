import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GetService from '../../../Context/GetService';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {

    const [products] = GetService();
    console.log(products);

    return (
        <div className="card container" >
            <h1 className='products-title'> Inventory items  </h1>

            <div className="row ">
                <div className="products-container">
                    {
                        products.slice(0, 6).map((product, index) => <Product
                            key={index}
                            product={product}
                        >
                        </Product>)
                    }
                </div>
            </div>
            <div className='mt-2'>

                <Button size="lg" >
                    <Link to='/allproducts'><span className='text-light'>More Inventory</span></Link>
                </Button>

            </div>
        </div>
    );
};

export default Products;