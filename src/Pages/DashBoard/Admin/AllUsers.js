import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Button from '../../Shared/Button/Button';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://book-wagon-server.vercel.app/users');
            const data = await res.json();
            return data;

        }
    });

    const handleMakeAdmin = id => {
        fetch(`https://book-wagon-server.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success("Make Admin Successfully")
                    refetch();
                }
            })
    }
    return (
        <div>
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
                                <th>Role</th>
                                <th>Make Admin</th>

                            </tr>
                        </thead>
                        <tbody>

                            {
                                users.map((user, i) => <tr key={user._id}>
                                    <th>{i + 1}</th>
                                    <td><div className="mask mask-squircle w-12 h-12">
                                        <img src={user.photourl} alt="Avatar Tailwind CSS Component" />
                                    </div></td>

                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>



                                    <td  >
                                        {user?.admin !== "admin" &&
                                            <button onClick={() => handleMakeAdmin(user._id)} className='btn  bg-gradient-to-r from-blue-800 to-blue-700 border-none'>Make Admin</button>}
                                    </td>




                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>

            </div>

        </div >
    );
};

export default AllUsers;