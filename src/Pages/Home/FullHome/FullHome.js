import React from 'react';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import ProductCategory from './../ProductCategory/ProductCategory';

const FullHome = () => {
    return (
        <div className='max-w-[1280px] mx-auto'>
            <Banner></Banner>
            <Advertise></Advertise>
            <ProductCategory></ProductCategory>

        </div>
    );
};

export default FullHome;