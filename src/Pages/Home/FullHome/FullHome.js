import React from 'react';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import ProductCategory from './../ProductCategory/ProductCategory';
import useTitle from './../../../Hooks/Hooks';
import Extra from '../Extra/Extra';

const FullHome = () => {
    useTitle('Home')
    return (
        <div className='max-w-[1280px] mx-auto'>
            <Banner></Banner>
            <Advertise></Advertise>
            <ProductCategory></ProductCategory>
            <Extra></Extra>

        </div>
    );
};

export default FullHome;