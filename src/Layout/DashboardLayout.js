import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Nav from '../Pages/Shared/Nav/Nav';

const DashboardLayout = () => {
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
                            {/* buyer */}
                            <li><Link to='/dashboard' >My Orders</Link></li>
                            {/* seller */}
                            <li><Link to='/dashboard/addProduct' >Add Product</Link></li>

                            <li><Link to='/dashboard/myBuyers' >My Buyers</Link></li>

                            <li><Link to='/dashboard/reportedItems' >Reported Items</Link></li>

                            {/* Admin */}

                            <li><Link to='/dashboard/allSeller' >My Sellers</Link></li>

                            <li><Link to='/dashboard/allBuyers' >My Buyers</Link></li>




                        </div>



                    </ul>

                </div>
            </div>

        </div>


    );
};

export default DashboardLayout;