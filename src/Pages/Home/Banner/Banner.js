import React from 'react';
import Images from '../../../images/banner/warehouse-1.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className='home-container'>
            <div className='cont-container'>

                <h1>Mobile Warehouse </h1>
                <p>Warehouse management and operations is a complex discipline that requires a combination of different levels to be successful. A warehouse management system (WMS) is often the standard platform used to centralize all warehousing processes. Other important areas of focus include warehouse control, warehouse supply and inventory management. Managing all of these functions can be a challenge for even the most discerning management team, so it is common for companies to consult with outside warehouse management companies and service providers.

                    Warehouse labels equipped with warehouse storage space and signage solutions for streamlined activities or services that can help you optimize your warehouse management processes. We hope this will help you gain access to valuable resources that can help you improve your existing warehouse operations and reduce costs. The list is presented in a simple alphabetical order; Listed companies are not ranked or rated in any way.</p>
            </div>
            <div className='img-container'>
                <img width={500} src={Images} alt="" />
            </div>

        </div>
    );
};

export default Banner;