import React from 'react';
import { Button, Input } from 'antd';
import './herohire.css';

function Herohireseo() {
    return (
        <div className='backherohire'>
            <div className='main-herodigital'>
                <p className='hero-first-text'>Hire Seo Consultant
                </p>
                <p className='grow-text'>Boost Your Online Presence With Data-Driven and Targeted SEO Strategies
                </p>
                <div className='form-digital'>
                    <Input placeholder="Enter Email Address" className='input-digital' />
                    <Button className='proposal-button'>Get My Free Proposal</Button>
                </div>
            </div>
        </div>
    );
}

export default Herohireseo;
