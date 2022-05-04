import React from 'react';
import errorPic from '../../../images/sleeping-png.png';

const NotFound = () => {
    return (
        <div>
            <h2 className='text-primary text-center'>Page Not Found 404</h2>
            <img className='w-100' src={errorPic} alt="" />
        </div>
    );
};

export default NotFound;