import React from 'react';

const TourCard = () => {
    return (
        <div className='relative rounded-lg shadow z-10 p-4 lg:-mt-60 sm:mt-0 bg-white text-gray-500  mx-16'>
            <div className=' gap-4 p-4 grid lg:grid-cols-4 sm:grid-cols-2'>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Destination</span>
                    </label>
                    <input type="text" placeholder="location" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">type</span>
                    </label>
                    <input type="text" placeholder="trip type" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">when</span>
                    </label>
                    <input type="date" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <button className="btn btn-warning max-w-xs mt-8 ">Search</button>
            </div>
        </div>
    );
};

export default TourCard;