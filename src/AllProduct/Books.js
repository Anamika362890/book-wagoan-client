import React from 'react';
import Button from '../Pages/Shared/Button/Button';
import BookingModal from './BookingModal';

const Books = ({ book, name }) => {
    const { book_name, book_img, details, price, original_price, purchase_year, posted_date, posted_time, condition_type, seller_name, phn_no } = book;
    return (
        <div>
            <div className=" md:grid grid-cols-2  lg:w-[1000px] mx-auto lg:my-10 mb-28  shadow-xl">
                <div>
                    <img className='md:w-[345px] md:h-[519px] md:m-8 rounded-xl' src={book_img} alt='' />
                </div>
                <div className='mt-8 mx-9' >
                    <h2 className="text-3xl my-3 font-bold text-blue-900">{book_name}</h2>
                    <p className='mb-3'><span className='font-bold '> Category</span> : {name}</p>
                    <p className='text-justify mb-3'>  {details}</p>
                    <p> <span className='font-bold'>Resale Price</span> : {price}</p>
                    <p ><span className='font-bold gap '> Original Price </span>: {original_price}</p>
                    <p ><span className='font-bold'> Location </span>:{ }</p>
                    <p ><span className='font-bold'> Year Of Purchase </span> : {purchase_year}</p>
                    <p ><span className='font-bold'> Seller </span> : {seller_name}</p>
                    <p > <span className='font-bold'>Condition Type </span> : {condition_type}</p>
                    <p > <span className='font-bold'>Mobile Number </span> : {phn_no} </p>
                    <p ><span className='font-bold'> Date </span>: {posted_date}</p>
                    <p className='mb-5'><span className='font-bold'> Time </span>: {posted_time}</p>





                    <Button > <label htmlFor="book-modal" >Book Now</label></Button>

                    <BookingModal
                        book_name={book_name}
                        price={price}
                    ></BookingModal>


                </div>
            </div>
        </div>



    );
};

export default Books;