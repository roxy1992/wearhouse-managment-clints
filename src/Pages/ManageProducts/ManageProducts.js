import React from 'react';
import useProducts from '../../hooks/useProducts';

const ManageProducts = () => {
    const [products, setProducts] = useProducts();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://gentle-springs-06548.herokuapp.com/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== id)
                    setProducts(remaining)
                })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center'>Manage Your Product</h2>
            {
                products.map(product => <div key={products.id}>


                    <h3>{product.name} <button onClick={() => handleDelete(product._id)}>Delete</button></h3>

                </div>)
            }


        </div>
    );
};

export default ManageProducts;