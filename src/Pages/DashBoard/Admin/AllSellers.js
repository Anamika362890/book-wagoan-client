import React, { useContext, useState } from 'react';
import Button from '../../Shared/Button/Button';
import { AuthContext } from './../../../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import ConfirmationModal from '../../Shared/Modal/ConfirmationModal';
import toast from 'react-hot-toast';
import Loading from './../../Shared/Loading/Loading';
import VerifyModal from '../../Shared/Modal/VerifyModal';

const AllSellers = () => {
    const [deletingSeller, setDeletingSeller] = useState(null);
    const [verified, setVerified] = useState(null);

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



    const handleVerifiedSeller = id => {
        fetch(`http://localhost:5000/users/verify/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success("Seller Verified SuccessFully")
                    refetch();
                }

                else {
                    toast.success("Seller is already Verified")
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

                                    {

                                        seller?.status !== "verified" &&
                                        <label onClick={() => handleVerifiedSeller(seller._id)} htmlFor="Confirmation-modal" className=" btn bg-gradient-to-r from-blue-800 to-blue-700 border-none">Verify</label>


                                    }

                                    {


                                        <label onClick={() => handleVerifiedSeller(seller._id)} htmlFor="Confirmation-modal" className=" btn bg-gradient-to-r from-green-800 to-green-700 border-none">Already Verify</label>


                                    }





                                </td>

                                <td>

                                    <label onClick={() => setDeletingSeller(seller)} htmlFor="Confirmation-modal" className="btn bg-gradient-to-r from-red-800 to-red-700 border-none">Delete</label>


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


            {
                verified &&
                <VerifyModal
                    title={`Are you sure you want to Verify ${verified.name} ?`}
                    message={`If verify Go to`}
                    closeModal={closeModal}
                    successAction={handleVerifiedSeller}
                    modalData={verified}

                >

                </VerifyModal>
            }

        </div>
    );
};

export default AllSellers;