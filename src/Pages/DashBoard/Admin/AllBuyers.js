import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';
import Button from '../../Shared/Button/Button';
import Loading from '../../Shared/Loading/Loading';
import ConfirmationModal from '../../Shared/Modal/ConfirmationModal';

const AllBuyers = () => {


    const [deletingBuyer, setDeletingBuyer] = useState(null);

    const closeModal = () => {
        setDeletingBuyer(null);
    }

    const { user } = useContext(AuthContext);


    const { data: buyers, isLoading, refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/buyers', {
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






    const handleDeletingBuyer = buyer => {
        console.log(buyer);
        fetch(`http://localhost:5000/buyers/${buyer._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Buyer ${buyer.name} deleted successfully`)
                }
            })

    }
    if (isLoading) {
        return <Loading></Loading>
    }

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
                            buyers.map((buyer, i) => <tr key={buyer._id} >
                                <th>{i + 1}</th>
                                <td><div className="mask mask-squircle w-12 h-12">
                                    <img src={buyer.photourl} alt='' />
                                </div></td>

                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>

                                <td>
                                    <td>
                                        <label onClick={() => setDeletingBuyer(buyer)} htmlFor="Confirmation-modal" className="btn bg-gradient-to-r from-red-800 to-red-700 border-none">Delete</label>
                                    </td>
                                </td>
                            </tr>)
                        }





                    </tbody>
                </table>
            </div>

            {
                deletingBuyer &&
                <ConfirmationModal

                    title={`Are you sure you wat to delete the seller ${deletingBuyer.name} ?`}
                    message={`If you delete this seller it can not be undone`}
                    closeModal={closeModal}
                    successAction={handleDeletingBuyer}
                    modalData={deletingBuyer}

                ></ConfirmationModal>
            }

        </div>
    );
};

export default AllBuyers;