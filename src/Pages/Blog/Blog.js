import React from 'react';
import Button from '../Shared/Button/Button';

const Blog = ({ blog }) => {
    const { question, answer, img } = blog;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='w-full h-56' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-blue-900">{question}</h2>
                <p className='text-gray-400'>{answer}</p>







            </div>
        </div >
    );
};

export default Blog;