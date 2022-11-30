import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import Nav from '../Pages/Shared/Nav/Nav';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import axios from "axios";
import { useQuery } from '@tanstack/react-query';
import UseAdmin from '../Hooks/useAdmin';
import UseBuyer from '../Hooks/UseBuyer'
import UseSeller from '../Hooks/useSeller';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = UseAdmin(user?.email)
    const [isBuyer] = UseBuyer(user?.email)
    const [isSeller] = UseSeller(user?.email)


    return (
        <div>
            <Nav></Nav>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content  ">
                    <Outlet></Outlet>


                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content  ">
                        <div className='flex mb-4'>
                            <div>
                                <img className='h-14 w-20' src='https://i.ibb.co/0FQ1X8x/icons8-dashboard-layout-48.png' alt='' />
                            </div>

                            <div>
                                <h1 className='my-4 font-bold font-3xl text-blue-900'>Dashboard</h1>
                            </div>
                        </div>

                        <div className=''>

                            {

                                <li><Link to='/dashboard/myorders' >My Orders</Link></li>
                            }






                            {

                                <>
                                    <li><Link to='/dashboard/addProduct' >Add Product</Link></li>
                                    <li><Link to='/dashboard/myProducts' >My Product</Link></li>
                                </>
                            }






                            {

                                <>
                                    <li><Link to='/dashboard/reportedItems' >Reported Items</Link></li>
                                    <li><Link to='/dashboard/allusers' >All Users</Link></li>

                                    <li><Link to='/dashboard/allSeller' >All Sellers</Link></li>

                                    <li><Link to='/dashboard/allBuyers' >All Buyers</Link></li>

                                </>
                            }




                        </div>



                    </ul>

                </div>
            </div>

        </div>


    );
};

export default DashboardLayout;