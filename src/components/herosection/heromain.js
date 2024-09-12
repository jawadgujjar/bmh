import React from 'react';
import './heromain.css';

function HeroMain() {
    return (
        <div className='back'>
            <video autoPlay muted loop>
                <source src='../video/hero-section.mp4' type='video/mp4' />
                Your browser does not support the video tag.
            </video>
            <p className='affordable-text typewriter'>Your Most Affordable</p>
        </div>
    );
}

export default HeroMain;
