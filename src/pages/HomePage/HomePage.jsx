import Features from '@/Components/Features/Features';
import HeroSection from '@/Components/HeroSection/HeroSection';
import Navbar from '@/Components/Shared/Navbar/Navbar';
import React from 'react';

const HomePage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeroSection></HeroSection>
            <Features></Features>
        </div>
    );
};

export default HomePage;