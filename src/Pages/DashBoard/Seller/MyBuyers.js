import React from 'react';

const MyBuyers = () => {
    return (
        <div>
            <h1 className='text-4xl text-blue-900 font-bold text-center my-5'>My Buyers</h1>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>

                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Location</th>

                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <th>1</th>


                            <td>Ana</td>
                            <td>Email</td>
                            <td>Phone Number</td>
                            <td>Location</td>

                        </tr>


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyBuyers;