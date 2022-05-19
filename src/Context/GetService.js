import React, { useEffect, useState } from 'react';

const GetService = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://gentle-springs-06548.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])


    return [products]
};

export default GetService;