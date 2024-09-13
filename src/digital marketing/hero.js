import React from 'react';
import { Button, Input } from 'antd';

import './hero.css';

function HeroDigitalMarketing() {
    return (
        <div className='backhero'>
            <div className='main-herodigital'>
                <p className='hero-first-text'>Digital Marketing Services
                </p>
                <p className='grow-text'>Grow Your Client Base With Data-Driven and Targeted Strategies
                </p>
                <div className='form-digital'>
                    <Input placeholder="Enter Email Address"  className='input-digital'/>
                    <Button className='proposal-button'>Get My Free Proposal</Button>
                </div>
            </div>
        </div>
    );
}

export default HeroDigitalMarketing;
