import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import img from '../../../assest/2.webp'

const Nav = () => {

    const menuItems = <React.Fragment>

        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/appointment'>Appointment</Link></li>
        <li><Link to='/reviews'>Reviews</Link></li>
        <li><Link to='/contact-us'>Contact Us</Link></li>


    </React.Fragment>
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}


                        </ul>
                    </div>

                    <Link className=" lg:text-2xl md:text-xl text-lg  flex font-bold text-blue-900 ">

                        <img src={img} className='lg:h-20 md:h-24 lg:mt-0 md:mt-0  mt-6 hidden lg:block md:block ' alt='' />


                        <h1 className='lg:mt-5 md:mt-9   '>  Book Wagon</h1>

                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">


                        {menuItems}


                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/login'> <Button>Login</Button></Link>
                </div>
            </div>
        </div>
    );
};

export default Nav;