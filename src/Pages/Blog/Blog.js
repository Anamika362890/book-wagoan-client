import React from 'react';
import Button from '../Shared/Button/Button';

const Blog = ({ blog }) => {
    const { question, answer, img } = blog;
    return (
        // <div className="card card-compact w-96 bg-base-100 shadow-xl">
        //     <figure><img className='w-full h-56' src={img} alt="Shoes" /></figure>
        //     <div className="card-body">
        //         <h2 className="card-title text-blue-900">{question}</h2>
        //         <p className='text-gray-400'>{answer}</p>







        //     </div>
        // </div >
        <div>
            <section class="py-10 bg-white sm:py-16 lg:py-24">
                <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">


                    <div class="">
                        <div>

                            <img class="object-cover w-full h-56" src={img} alt="" />

                            <span class="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-rose-500 bg-rose-100 mt-9"> Technology </span>
                            <p class="mt-6 text-xl font-semibold">
                                {question}
                            </p>
                            <p class="mt-4 text-gray-600">{answer.slice(0, 70)}...<span className='text-blue-800'>Read More</span></p>
                            <div class="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
                            <span class="block text-sm font-bold tracking-widest text-gray-500 uppercase"> Anamika Goswami .  12,December 2022 </span>
                        </div>


                    </div>
                </div>
            </section>

        </div>
    );
};

export default Blog;