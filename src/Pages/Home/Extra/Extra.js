import React from 'react';
import delivery from '../../../assest/fastest delivery.png'
import cod from '../../../assest/COD.jpg'
import bestPrice from '../../../assest/best price.jpg'
import available from '../../../assest/available.webp'


const Extra = () => {
    return (
        <div className='my-10'>
            <h1 className='text-3xl text-blue-900 font-bold my-10 text-center'>Why Chose Us</h1>



            <div className='grid grid-cols-4 gap-10 mx-10' >

                <div className="card w-64 glass bg-pink-300">
                    <figure><img className='h-44 w-full ' src={delivery} alt="" /></figure>
                    <div className='bg-gradient-to-r from-blue-300 to-blue-900 text-white py-2' >
                        <h2 className="text-center">Fastest Delivery</h2>

                    </div>

                </div>
                <div className="card w-64 glass">
                    <figure><img className='h-44 w-full' src={cod} alt="" /></figure>

                    <div className='bg-gradient-to-r from-blue-300 to-blue-900 text-white py-2' >
                        <h2 className="text-center">Cash On Delivery</h2>

                    </div>

                </div>
                <div className="card w-64 glass">
                    <figure><img className='h-44 w-full' src={available} alt="" /></figure>
                    <div className='bg-gradient-to-r from-blue-300 to-blue-900 text-white py-2' >
                        <h2 className="text-center">24/7 Available</h2>

                    </div>

                </div>
                <div className="card w-64 glass">
                    <figure><img className='h-44 w-full' src={bestPrice} alt="" /></figure>
                    <div className='bg-gradient-to-r from-blue-300 to-blue-900 text-white py-2' >
                        <h2 className="text-center">Sell & Buy in Best Price</h2>

                    </div>

                </div>


            </div>
        </div >
    );
};

export default Extra;