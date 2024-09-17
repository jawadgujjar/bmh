import React from 'react';
import { Button, Input } from 'antd';
import './herodental.css';

function Herodentalseo() {
    return (
        <div className='backhero'>
            <div className='main-herodigital'>
                <p className='hero-first-text'>Dental SEO</p>
                <p className='grow-text'>Boost Your Online Presence With Data-Driven and Targeted SEO Strategies</p>
                <div className='form-digital'>
                    <Input placeholder="Enter Email Address" className='input-digital' />
                    <Button className='proposal-button'>Get My Free Proposal</Button>
                </div>
            </div>
        </div>
    );
}

export default Herodentalseo;
