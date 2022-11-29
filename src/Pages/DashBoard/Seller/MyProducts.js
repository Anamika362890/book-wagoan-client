import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import Button from '../../Shared/Button/Button';
import Advertise from './../../Home/Advertise/Advertise';

const MyProducts = () => {

    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/lproducts?email=${user?.email}`;

    const { data: products = [] } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })


    return (
        <div>
            <h1 className='text-4xl text-blue-900 font-bold text-center my-5'>My Products {products.length}</h1>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>

                            <th>Name</th>
                            <th>Advertise</th>
                            <th>Status</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            products.length && products.map((product, i) => <tr key={product._id} >
                                <th>{i + 1}</th>
                                <td><div className="mask mask-squircle w-12 h-12">
                                    <img src={product.book_image} alt="Avatar Tailwind CSS Component" />
                                </div></td>

                                <td>{product.book_name}</td>
                                <td>
                                    <Button >Click Here</Button>
                                </td>

                                <td>Available</td>
                                <td>
                                    <button className='btn bg-red-600 border-none hover:bg-red-500 '>Delete</button>
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

export default MyProducts;