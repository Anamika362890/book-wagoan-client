import React from 'react';
import { Link } from 'react-router-dom';
import route404 from '../../assest/404webp.webp'
import Button from '../Shared/Button/Button';

const Route404 = () => {
    return (
        <div className='grid lg:grid-cols-2 lg:w-[1200px] lg:m-auto'>
            <div>
                <img src={route404} alt=''></img>

            </div>
            <div className='my-auto md:mx-auto mx-5'>
                <h1 className='text-5xl font-bold text-blue-900 ' >Oops!Page not Found</h1>
                <p className='my-7 text-gray-400 text-lg'>We can not find what are you looking for.</p>
                <Link to='/' ><Button>Go Back To Homepage</Button></Link>
            </div>
        </div>
    );
};

export default Route404;