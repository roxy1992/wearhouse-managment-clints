import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';


const AllProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allservice')
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
            {/* <button className='btn btn-light mt-3'>More Inventory</button> */}
        </div>
    )
};


export default AllProducts;