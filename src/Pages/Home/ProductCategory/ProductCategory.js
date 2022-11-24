import React, { useEffect, useState } from 'react';
import Category from './Category';

const ProductCategory = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('cat.json')
            .then(res => res.json())
            .then(data => setCategories(data))

    }, [])
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