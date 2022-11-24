import React from 'react';
import bannerPic from '../../../assest/group-of-people-reading-and-borrowing-books_53876-43122.jpeg'
import Button from '../../Shared/Button/Button';

const Banner = () => {
    return (
        <div className="hero  my-12 ">


            <div className="hero bg-gradient-to-r from-blue-300 to-blue-900 text-white rounded-lg ">

                <div className="hero-content flex-col  lg:flex-row-reverse">
                    <img src={bannerPic} className="lg:w-1/2 rounded-lg shadow-2xl md:my-4 " alt='' />
                    <div className='md:py-7'>
                        <h1 className="lg:text-5xl md:text-6xl text-3xl font-bold text-blue-900 lg:w-[480px]  ">Keep Reading</h1>
                        <p className="lg:py-6 md:py-6 py-4 text-xl lg:w-96 ">Reading Book is fun.Buy and sell your book with best price.</p>
                        <Button>Get Started</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;