import React from 'react';
import { Button, Input } from 'antd';
import './heroseo.css';

function Heroseo1() {
    return (
        <div className='heroseo'>
            <div className='main-heroseo'>
                <p className='hero-first-text-seo'>Search Engine Optimization – SEO Company
                </p>
                <p className='text-seo1'>Invest in Your Future with an SEO Company that Gets Results
                </p>
                <div className='form-seo'>
                    <Input placeholder="Enter Email Address"  className='input-seo'/>
                    <Button className='proposal-button-seo'>Get My Free Proposal</Button>
                </div>
            </div>
        </div>
    );
}

export default Heroseo1;
