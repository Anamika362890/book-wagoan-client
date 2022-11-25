import React from 'react';

const Books = ({ book, name }) => {
    const { book_name, book_img, details, price, original_price, purchase_year, posted_date, posted_time, condition_type, seller_name, phn_no } = book;
    return (
        <div>





            <div className="card lg:card-side  lg:w-[1000px] mx-auto lg:my-10  shadow-xl">
                <figure><img className=' h-96 w-96 m-8 rounded-lg' src={book_img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{book_name}</h2>
                    <p><span className='font-bold'> Category</span> : {name}</p>
                    <p className='text-justify'>  {details}</p>
                    <p> <span className='font-bold'>Resale Price</span> : {price}</p>
                    <p><span className='font-bold'> Original Price </span>: {original_price}</p>
                    <p><span className='font-bold'> Location </span>:{ }</p>
                    <p><span className='font-bold'> Year Of Purchase </span> : {purchase_year}</p>
                    <p><span className='font-bold'> Seller </span> : {seller_name}</p>
                    <p> <span className='font-bold'>Condition Type </span> : {condition_type}</p>
                    <p> <span className='font-bold'>Mobile Number </span> : {phn_no} </p>
                    <p><span className='font-bold'> Date </span>: {posted_date}</p>
                    <p><span className='font-bold'> Time </span>: {posted_time}</p>

                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default Books;