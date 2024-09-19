import React from 'react';
import { Button, Input } from 'antd';
import './herolocalseo.css';

function Herolocalseo1() {
    return (
        <div className='herolocalseo'>
            <div className='main-herolocalseo'>
                <p className='hero-first-text-localseo'>Local Search Engine Optimization – Local SEO
                </p>
                <p className='text-herolocalseo'>Grow Your Online Visibility Within Your Target Locations
                </p>
                <div className='form-herolocalseo'>
                    <Input placeholder="Enter Email Address"  className='input-herolocalseo'/>
                    <Button className='proposal-button-herolocalseo'>Get My Free Proposal</Button>
                </div>
            </div>
        </div>
    );
}

export default Herolocalseo1;
