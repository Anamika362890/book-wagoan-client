import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import Button from '../../Shared/Button/Button';

const AllBuyers = () => {
    const { user } = useContext(AuthContext);
    const url = 'http://localhost:5000/buyers';

    const { data: buyers = [] } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch(url, {
                // headers: {
                //     authorization: `bearer ${localStorage.getItem('accessToken')}`
                // }
            });
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <h1 className='text-4xl text-blue-900 font-bold text-center my-5'>All Buyers</h1>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>

                            <th>Name</th>
                            <th>Email</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers.map((buyer, i) => <tr >
                                <th>{i + 1}</th>
                                <td><div className="mask mask-squircle w-12 h-12">
                                    <img src={buyer.photourl} alt='' />
                                </div></td>

                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>

                                <td>
                                    <td>
                                        <button className='btn bg-red-600 border-none hover:bg-red-500 '>Delete</button>
                                    </td>
                                </td>
                            </tr>)
                        }





                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllBuyers;