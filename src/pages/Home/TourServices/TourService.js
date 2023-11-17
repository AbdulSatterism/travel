import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaLocationArrow } from 'react-icons/fa';

const TourService = ({ tour }) => {
    const { placeName, price, location, image } = tour;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="tour" /></figure>
            <div className="card-body">
                <h2 className="card-title text-orange-600 uppercase">{placeName}</h2>
                <div className='flex text-gray-400 items-center '>
                    <div className='mx-2'><FaLocationArrow></FaLocationArrow></div>
                    <div>
                        <p className='text-xl text-gray-400'>{location}</p>
                    </div>
                </div>
                <p className='text-xl text-gray-400'>Service Charge: ${price}</p>
                <div className="card-actions justify-end">
                    <Link to='/destination'>
                        <button className="btn btn-primary">Explore <FaArrowRight></FaArrowRight></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TourService;