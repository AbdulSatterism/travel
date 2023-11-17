import React from 'react';
import aboutImg from "../../../asset/images/ban.jpeg"

const AboutBanner = () => {
    return (
        <div className="hero h-[400px]" style={{ backgroundImage: `url(${aboutImg})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">About</h1>
                    <p className="mb-5">Enjoy and explore UK</p>

                </div>
            </div>
        </div>
    );
};

export default AboutBanner;