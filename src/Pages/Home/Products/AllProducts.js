import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import GetService from '../../../Context/GetService';


const AllProducts = () => {

    const [products] = GetService();

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
            {/* <button className='btn btn-light mt-3'>More Inventory</button> */}
        </div>
    )
};


export default AllProducts;