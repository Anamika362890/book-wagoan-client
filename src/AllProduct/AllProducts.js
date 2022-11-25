import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Books from './Books';


const AllProducts = () => {
    const { _id, name, books } = useLoaderData();


    return (
        <div className='lg:w-[1240px] lg:mx-auto'>
            <h1>{name}</h1>

            <div className='border rounded-xl my-7'>
                {
                    books?.map(book => <Books
                        book={book}
                        name={name}
                    ></Books>)
                }
            </div>



        </div>
    );
};

export default AllProducts;