import React, { useContext } from 'react';
import Button from '../../Shared/Button/Button';
import { AuthContext } from './../../../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const AllSellers = () => {

    const { user } = useContext(AuthContext);
    const url = 'http://localhost:5000/sellers';

    const { data: sellers = [] } = useQuery({
        queryKey: ['sellers'],
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
            <h1 className='text-4xl text-blue-900 font-bold text-center my-5'>All Sellers</h1>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>

                            <th>Name</th>
                            <th>Email</th>
                            <th>Verification</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            sellers.map((seller, i) => <tr >
                                <th>{i + 1}</th>
                                <td><div className="mask mask-squircle w-12 h-12">
                                    <img src={seller.photourl} alt='' />
                                </div></td>

                                <td>{seller.name}</td>
                                <td>{seller.email}</td>

                                <td>
                                    <Button>Verify</Button>
                                </td>

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

export default AllSellers;