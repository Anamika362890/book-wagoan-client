import React, { useContext } from 'react';
import Button from '../Pages/Shared/Button/Button';
import { AuthContext } from './../Context/AuthProvider';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const BookingModal = ({ book_name, price, category_id }) => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();



    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const buyer_name = form.Bname.value;
        const buyer_email = form.Bemail.value;
        const book_name = form.book.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const location = form.location.value;


        const booking = {
            buyer_name, buyer_email, book_name, price, phone, location

        }
        console.log(booking);

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.acknowledged === true) {
                    toast.success('Booking Confirmed')
                    form.reset();

                }
                else {
                    toast.error(data.message);
                }

            })
    }


    return (


        <>
            <input type="checkbox" id="book-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="book-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-blue-900 my-4">Book Now!!</h3>


                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>





                        <input name='Bname' type="name" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input input-bordered w-full " />


                        <input name='Bemail' type="email" defaultValue={user?.email} disabled placeholder="Your Email" className="input input-bordered w-full " />

                        <input name='book' type="text" defaultValue={book_name} disabled className="input input-bordered w-full " />

                        <input name='price' type="number" defaultValue={price} disabled className="input input-bordered w-full " />

                        <input name='phone' required type="text" placeholder="Your Phone" className="input input-bordered w-full " />

                        <input name='location' required type="text" placeholder="Enter a meeting location" className="input input-bordered w-full " />

                        <div>

                            <Button>Book Now</Button>
                        </div>


                    </form>
                </div>
            </div>

        </>


    );
};

export default BookingModal;