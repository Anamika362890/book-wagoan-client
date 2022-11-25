import React, { useEffect, useState } from 'react';
import Category from './Category';
import { useQuery } from '@tanstack/react-query';

const ProductCategory = () => {





    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {

            const res = await fetch('http://localhost:5000/category');
            const data = await res.json();
            return data
        }
    })


    return (
        <div className='my-16'>
            <h1 className='text-blue-900 font-bold text-5xl text-center mb-16'>All Categories </h1>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
                {
                    categories.map(category => <Category
                        key={category.id}
                        category={category}

                    ></Category>)
                }


            </div>

        </div>
    );
};

export default ProductCategory;