import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';
import Button from '../../Shared/Button/Button';
import Loading from '../../Shared/Loading/Loading';
import Advertise from './../../Home/Advertise/Advertise';
import ConfirmationModal from './../../Shared/Modal/ConfirmationModal';

const MyProducts = () => {

    const [deletingProducts, setDeletingProducts] = useState(null);

    const closeModal = () => {
        setDeletingProducts(null);
    }
    const { user } = useContext(AuthContext);
    const { data: products, isLoading, refetch } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            try {
                const res = await fetch(`https://book-wagon-server.vercel.app/lproducts?email=${user?.email}`, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    });
    const handleDeletingProduct = product => {
        console.log(product);
        fetch(`https://book-wagon-server.vercel.app/products/${product._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Buyer ${product.book_name} deleted successfully`)
                }
            })

    }
    if (isLoading) {
        return <Loading></Loading>
    }


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
                                    <td>
                                        <label onClick={() => setDeletingProducts(product)} htmlFor="Confirmation-modal" className="btn bg-gradient-to-r from-red-800 to-red-700 border-none">Delete</label>
                                    </td>
                                </td>

                            </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>

            {
                deletingProducts &&
                <ConfirmationModal

                    title={`Are you sure you wat to delete the  ${deletingProducts.book_name} ?`}
                    message={`If you delete this seller it can not be undone`}
                    closeModal={closeModal}
                    successAction={handleDeletingProduct}
                    modalData={deletingProducts}

                ></ConfirmationModal>
            }



        </div>
    );
};

export default MyProducts;