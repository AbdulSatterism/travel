import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const BookingModal = ({ bookingInfo }) => {

    const { user } = useContext(AuthContext)
    const { placeName, price, location } = bookingInfo;
    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        const phone = form.phone.value;
        const bookedData = {
            name: name,
            email: email,
            location: location,
            tourDate: date,
            serviceCharge: price,
            phone: phone,
        }
        localStorage.setItem('booking-info', JSON.stringify(bookedData));
        form.reset()
        alert(`Congratulation your ${placeName} trip is purchases done`)
    }

    return (
        <div>
            <dialog id="booking_modal" className="modal">
                <div className="modal-box">
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                    <h3 className="font-bold text-lg text-center uppercase text-gray-500">{placeName}</h3>

                    <form onSubmit={handleBooking} className=' modal-box grid gap-2 mt-10 grid-cols-1'>

                        <input name='name' type="text" readOnly defaultValue={user?.displayName} placeholder="Your name" className="input input-bordered input-primary w-full" />

                        <input name='email' type="email" readOnly defaultValue={user?.email} placeholder="Enter your email" className="input input-bordered input-primary w-full" />

                        <input name='date' type="date" required placeholder="select journy date" className="input input-bordered input-primary w-full" />

                        <input name='phone' required type="number" placeholder="Enter your phone" className="input input-bordered input-primary w-full" />
                        <input type="submit" className="btn btn-accent w-full" value="Submit" />

                    </form>

                </div>
            </dialog>
        </div>
    );
};

export default BookingModal;