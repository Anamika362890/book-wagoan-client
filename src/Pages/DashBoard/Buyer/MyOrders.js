import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import Button from '../../Shared/Button/Button';

const MyOrders = () => {



    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/booking?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            console.log(bookings);
            return data;
        }
    })

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
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings?.length && bookings?.map((booked, i) => <tr >
                                <th>{i + 1}</th>
                                <td><div className="mask mask-squircle w-12 h-12">
                                    <img src={booked?.img} alt="Avatar Tailwind CSS Component" />
                                </div></td>

                                <td>{booked?.book_name}</td>
                                <td>{booked?.price} Taka</td>
                                <td>
                                    <Button>Pay Now</Button>
                                </td>
                            </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyOrders;