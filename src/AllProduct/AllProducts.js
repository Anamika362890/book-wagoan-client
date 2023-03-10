import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Loading from '../Pages/Shared/Loading/Loading';
import Books from './Books';
import { useState } from 'react';


const AllProducts = ({ name, isLoading }) => {

    const [ordering, setordering] = useState(null);
    const books = useLoaderData();

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='lg:w-[1240px] lg:mx-auto'>
            <h1 className='text-blue-900 font-bold text-4xl text-center my-9'>There are {books.length} books in this category</h1>


            <div className=' rounded-xl my-7 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
                {
                    books?.map(book => <Books
                        key={book._id}
                        book={book}
                        name={name}
                        ordering={ordering}
                        setordering={setordering}




                    ></Books>)
                }
            </div>



        </div>
    );
};

export default AllProducts;