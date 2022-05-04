import React from 'react';
import Banner from '../Banner/Banner';
import BestProducts from '../BestProducts/BestProducts';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <BestProducts></BestProducts>
        </div>
    );
};

export default Home;