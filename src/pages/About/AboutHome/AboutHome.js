import React from 'react';
import AboutBanner from '../AboutBanner/AboutBanner';
import AboutInfo from '../AboutInfo/AboutInfo';
import AboutContribution from '../AboutInfo/AboutContribution';

const AboutHome = () => {
    return (
        <div>
            <AboutBanner></AboutBanner>
            <AboutInfo></AboutInfo>
            <AboutContribution></AboutContribution>
        </div>
    );
};

export default AboutHome;