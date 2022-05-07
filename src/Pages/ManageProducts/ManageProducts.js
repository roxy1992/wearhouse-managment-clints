import React, { useState } from 'react';
import useProducts from '../../hooks/useProducts';

const ManageProducts = () => {
    const [products,] = useProducts();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {

        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Manage your services</h2>
            {
                products.map(product => <div key={products.id}>
                    <h5>{product.name} <button onClick={() => handleDelete(product._id)}>x</button></h5>

                </div>)
            }
        </div>
    );
};

export default ManageProducts;