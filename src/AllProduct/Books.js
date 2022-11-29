import React from 'react';
import Button from '../Pages/Shared/Button/Button';
import BookingModal from './BookingModal';
import { useState } from 'react';



const Books = ({ book }) => {
    const [ordering, setOrdering] = useState(null);



    const { seeler_image, book_name, book_image, category_id, details, price, Real_price, purchase_year, posted_date, posted_time, condition_type, seller_name, phon_no, location } = book;

    return (



        <div>
            <div >

                <div className="card h-[850px] w-96 glass bg-base-200">
                    <figure><img className='h-44 w-44 mt-8 mx-3 rounded-3xl' src={book_image} alt="" /></figure>
                    <div className="card-body">
                        <div className='flex'>
                            <div>
                                <h2 className="card-title text-blue-900">
                                    {book_name}</h2>


                                <div className='flex items-center '>
                                    <img className='w-7' src='https://i.ibb.co/gP3K4Bt/tag-label-icon.png' alt=''></img>

                                    <p className='mx-2 font-bold'>{category_id}</p>

                                </div>
                            </div>


                        </div>
                        <p className='text-justify'>{details}</p>
                        <div>

                            <div className='flex items-center  '>
                                <img className='w-7' src='https://i.ibb.co/QjDPPCg/telephone.png' alt=''></img>

                                <p className='mx-2 font-bold'>{phon_no}</p>

                            </div>

                        </div>

                        <div className="card-actions justify-center my-2">
                            <div className=" bg-gradient-to-r from-blue-800 to-blue-700 border-none  text-white badge badge-outline">Original Price : {Real_price} </div>
                            <div className=" bg-gradient-to-r from-blue-800 to-blue-700 border-none  text-white badge badge-outline"> Price : {price} </div>
                            <div className="bg-gradient-to-r from-blue-800 to-blue-700 border-none  text-white badge badge-outline">Location : {location}</div>
                            <div className="bg-gradient-to-r from-blue-800 to-blue-700 border-none  text-white badge badge-outline">Purchase Year : {purchase_year}</div>
                            <div className="bg-gradient-to-r from-blue-800 to-blue-700 border-none  text-white badge badge-outline">Condition : {condition_type}</div>

                        </div>


                        <div className=' w-96'>
                            <div className='flex'>
                                <div className="w-20 ">
                                    <img className='rounded-full' src={seeler_image} alt='' />
                                </div>
                                <div className=' mx-10'>
                                    <h1><span className='font-bold'>Posted By</span> : {seller_name}</h1>
                                    <h1><span className='font-bold'>Posted Date</span> : {posted_date} </h1>
                                    <h1><span className='font-bold'>Posted Time </span> : {posted_time} </h1>
                                </div>
                            </div>

                            <div className='mx-32 mt-3'>
                                <label onClick={() => setOrdering(book)} htmlFor="book-modal" >Book Now</label>


                            </div>


                        </div>

                    </div>

                </div>



            </div>


            {
                ordering &&
                <BookingModal
                    book_image={ordering?.book_image}
                    book_name={ordering?.book_name}
                    price={ordering?.price}
                ></BookingModal>
            }
        </div>




    );
};

export default Books;