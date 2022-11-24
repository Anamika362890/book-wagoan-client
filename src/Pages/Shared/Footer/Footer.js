import React from 'react';
import img from '../../../assest/2.webp'
import { Link } from 'react-router-dom';
import Fb from '../../../assest/fb.png'
import twitter from '../../../assest/twitter.png'
import insta from '../../../assest/insta.png'

const Footer = () => {
    return (
        <div >
            <footer className="footer footer-center p-10 bg-black text-primary-content">
                <div>

                    <img src={img} className='lg:h-20 md:h-24 lg:mt-0' alt='' />
                    <p className="font-bold">
                        <h1 className='text-xl'>  Book Wagon</h1>
                    </p>
                    <p>Copyright © 2022 - All right reserved</p>
                </div>
                <div>
                    <h1 className='font-bold text-xl'>Find Us On</h1>
                    <div className='flex mt-4'>
                        <a href='https://www.facebook.com/'>
                            <img src={Fb} alt='' className='h-9 mx-2' />

                        </a>

                        <a href='https://twitter.com/'>
                            <img src={twitter} alt='' className='h-12 mx-2' />

                        </a>
                        <a href='https://www.instagram.com/accounts/login/'>
                            <img src={insta} alt='' className='h-10 mx-2' />

                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;