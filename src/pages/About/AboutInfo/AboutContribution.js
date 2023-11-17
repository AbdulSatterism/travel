import React from 'react';

const AboutContribution = () => {
    return (
        <div className='my-16'>
            <h1 className="text-2xl p-8 text-center font-bold font-mono text-blue-500 py-4">Our Contribution</h1>
            <div className=" grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 shadow gap-2 p-2">

                <div className="stat">
                    <div className="stat-figure text-primary">
                        <div className="stat-title text-xl">Total Destination</div>
                    </div>
                    <div className="stat-value text-primary">120+</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-primary">
                        <div className="stat-title text-xl">Travel packages</div>
                    </div>
                    <div className="stat-value text-primary">500+</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-primary">
                        <div className="stat-title text-xl">Total Travelers</div>
                    </div>
                    <div className="stat-value text-primary">120K+</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-primary">
                        <div className="stat-title text-xl">Positive Reviews</div>
                    </div>
                    <div className="stat-value text-primary">50K+</div>
                </div>

            </div>

        </div>
    );
};

export default AboutContribution;