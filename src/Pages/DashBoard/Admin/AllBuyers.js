import React from 'react';

const AllBuyers = () => {
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

                        <tr>
                            <th>1</th>
                            <td><div className="mask mask-squircle w-12 h-12">
                                <img src="https://t4.ftcdn.net/jpg/03/85/50/01/360_F_385500115_T8QiYsPeliQ5tE3npwOuJNUfunqFBo1U.jpg" alt="Avatar Tailwind CSS Component" />
                            </div></td>

                            <td>Anamika</td>
                            <td>Email</td>
                            <td>
                                <td>
                                    <button className='btn bg-red-600 border-none hover:bg-red-500 '>Delete</button>
                                </td>
                            </td>
                        </tr>


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllBuyers;