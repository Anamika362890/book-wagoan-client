import React from 'react';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import ProductCategory from './../ProductCategory/ProductCategory';

const FullHome = () => {
    return (
        <div>
            <Banner></Banner>
            <Advertise></Advertise>
            <ProductCategory></ProductCategory>

        </div>
    );
};

export default FullHome;