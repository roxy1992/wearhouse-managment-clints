import React from 'react';
import Banner from '../Banner/Banner';
import BestProducts from '../BestProducts/BestProducts';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div className='text-center' >
            <Banner></Banner>
            <Products></Products>
            <BestProducts></BestProducts>
            {/* <button className='btn btn-primary'>More Inventory</button> */}
        </div>
    );
};

export default Home;