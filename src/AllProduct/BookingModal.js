import React, { useContext } from 'react';
import Button from '../Pages/Shared/Button/Button';
import { AuthContext } from './../Context/AuthProvider';

const BookingModal = ({ book_name, price }) => {
    const { user } = useContext(AuthContext);
    return (


        <>
            <input type="checkbox" id="book-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-center">Book Now!!</h3>

                    <form className='grid grid-cols-1 gap-3 mt-10'>





                        <label className="label"> <span className="label-text">Your name</span></label>
                        <input name='name' type="name" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input input-bordered w-full " />

                        <label className="label"> <span className="label-text">Your Email</span></label>
                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Your Email" className="input input-bordered w-full " />

                        <label className="label"> <span className="label-text">Book Name</span></label>
                        <input name='item' type="text" defaultValue={book_name} disabled placeholder="" className="input input-bordered w-full " />

                        <label className="label"> <span className="label-text">Book Price</span></label>
                        <input name='price' type="text" defaultValue={price} disabled placeholder="" className="input input-bordered w-full " />


                        <label className="label"> <span className="label-text">Your Phone Number</span></label>
                        <input name='phone' type="number" className="input input-bordered w-full " />

                        <label className="label"> <span className="label-text">Location</span></label>
                        <input name='location' type="text" placeholder="Enter a meeting location" className="input input-bordered w-full " />


                        <div className="modal-action">
                            <Button>Submit</Button>

                            <label htmlFor="book-modal" className="btn">Yay!</label>
                        </div>
                    </form>
                </div>
            </div>

        </>


    );
};

export default BookingModal;