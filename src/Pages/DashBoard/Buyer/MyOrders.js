import React from 'react';
import Button from '../../Shared/Button/Button';

const MyOrders = () => {
    return (
        <div>
            <h1 className='text-4xl text-blue-900 font-bold text-center my-5'>My orders</h1>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>

                            <th>Title</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <th>1</th>
                            <td><div className="mask mask-squircle w-12 h-12">
                                <img src="https://t4.ftcdn.net/jpg/03/85/50/01/360_F_385500115_T8QiYsPeliQ5tE3npwOuJNUfunqFBo1U.jpg" alt="Avatar Tailwind CSS Component" />
                            </div></td>

                            <td>Quality Control Specialist</td>
                            <td>
                                <Button>Pay Now</Button>
                            </td>
                        </tr>


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyOrders;