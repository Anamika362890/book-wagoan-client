import React, { useContext, useState } from 'react';
import Button from '../../Shared/Button/Button';
import { AuthContext } from './../../../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import ConfirmationModal from '../../Shared/Modal/ConfirmationModal';
import toast from 'react-hot-toast';
import Loading from './../../Shared/Loading/Loading';

const AllSellers = () => {
    const [deletingSeller, setDeletingSeller] = useState(null);

    const closeModal = () => {
        setDeletingSeller(null);
    }

    const { user } = useContext(AuthContext);




    const { data: sellers, isLoading, refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/sellers', {
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

    const handleDeletingSeller = seller => {
        console.log(seller);
        fetch(`http://localhost:5000/users/${seller._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Seller ${seller.name} deleted successfully`)
                }
            })

    }
    if (isLoading) {
        return <Loading></Loading>
    }
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

                                    <label onClick={() => setDeletingSeller(seller)} htmlFor="Confirmation-modal" className="btn bg-red-600 border-none hover:bg-red-500">Delete</label>


                                </td>



                            </tr>)
                        }


                    </tbody>
                </table>
            </div>

            {
                deletingSeller &&
                <ConfirmationModal

                    title={`Are you sure you wat to delete the seller ${deletingSeller.name} ?`}
                    message={`If you delete this seller it can not be undone`}
                    closeModal={closeModal}
                    successAction={handleDeletingSeller}
                    modalData={deletingSeller}

                ></ConfirmationModal>
            }

        </div>
    );
};

export default AllSellers;