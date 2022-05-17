import React from 'react';
import IconSection from '../../Shared/IconSection/IconSection';
import Banner from '../Banner/Banner';
import BestProducts from '../BestProducts/BestProducts';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div className='text-center' >
            <Banner></Banner>
            <Products></Products>
            <BestProducts></BestProducts>
            <IconSection></IconSection>
            {/* <button className='btn btn-primary'>More Inventory</button> */}
        </div>
    );
};

export default Home;