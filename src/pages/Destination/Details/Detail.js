import React from 'react';
import DetailsBanner from '../DetailsBanner/DetailsBanner';
import { Link } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';

const Detail = ({ info }) => {
    const { placeName, price, location, image, video, bannerImg, details } = info;
    // const [bookingInfo, setBookingInfo] = useState(null)

    return (
        <div>
            <div>
                <DetailsBanner
                    banner={bannerImg}
                    location={location}
                ></DetailsBanner>
            </div>
            <div>
                <div className="hero min-h-screen bg-white gap-4">
                    <div className="hero-content flex-col lg:flex-row">
                        <Link to={video} target="_blank">
                            <img
                                src={image} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                        </Link>
                        <div className=''>
                            <h1 className="text-3xl font-bold text-gray-500">{placeName}</h1>
                            <p className="py-6 justify-center ">{details}</p>
                            <p className="py-6 justify-center text-xl uppercase text-orange-600 ">pay: ${price}</p>

                            <button onClick={() => document.getElementById('booking_modal').showModal(null)} className="btn btn-primary text-xl font-bold">Booking</button>
                        </div>
                    </div>
                </div>
            </div>

            {
                <BookingModal
                    bookingInfo={info}
                ></BookingModal>
            }
        </div>
    );
};

export default Detail;