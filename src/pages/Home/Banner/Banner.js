import React from 'react';
import banner from '../../../asset/images/banner (4).jpeg'
import TourCard from './TourCard';

const Banner = () => {
    return (
        <div className=''>
            <div className="hero bg-blue-800">
                <div className="hero-content flex-col lg:flex-row-reverse gap-16">
                    <img src={banner} className=" lg:w-1/2 h-screen " alt='' />
                    <div>
                        <h1 className="text-2xl font-serif text-orange-300 font-semibold">Explore The</h1>
                        <h1 className="text-5xl text-white font-bold">Travel &</h1>
                        <h1 className="text-5xl text-white font-bold">Adventures</h1>
                        <p className="py-2 text-white">Find awesome tour, car, hotel and activities in BD</p>

                    </div>
                </div>

            </div>
            {/* banner search */}
            <TourCard></TourCard>
        </div>
    );
};

export default Banner;