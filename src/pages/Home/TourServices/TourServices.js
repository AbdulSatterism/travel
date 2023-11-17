import React from 'react';
import useService from '../../../hooks/useService';
import TourService from './TourService';

const TourServices = () => {
    const [service] = useService();

    return (
        <div className='mt-28 p-1 ml-6  bg-white text-black'>
            <h1 className='text-3xl font-semibold font-serif text-center my-8 text-gray-400'>Tourist Places</h1>
            <div className='grid  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2'>
                {
                    service.map(tour => <TourService
                        key={tour._id}
                        tour={tour}
                    >

                    </TourService>)
                }
            </div>
        </div>
    );
};

export default TourServices;