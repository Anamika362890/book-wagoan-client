import React from 'react';
import Button from '../Shared/Button/Button';

const Blog = ({ blog }) => {
    const { question, answer, img } = blog;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='w-full h-56' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-blue-900">{question}</h2>
                <p className='text-gray-400'>{answer.slice(0, 95)}<label htmlFor="my-modal" className='font-bold cursor-pointer text-blue-900'>.....Read More</label></p>





                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg text-blue-900">{question}</h3>
                        <p className="py-5">{answer}</p>
                        <div className="modal-action">
                            <label htmlFor="my-modal" className='btn border-none bg-gradient-to-r from-blue-800 to-blue-900' >Close</label>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Blog;