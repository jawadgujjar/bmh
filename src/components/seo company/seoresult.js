// src/components/ProjectHistory.js
import React from 'react';
import {Button } from 'antd';
import './seoresult.css';

const Seohistory1 = () => {
    return (
        <div>
            <section className="project-history">
            <h1 className="section-title">Our <span className="span">Company</span> Success</h1>
            <div className="projects2">

                <div className="row">
                    <div className="col-md-4">
                        <div className="stat-card">
                            <h3 className="stat-number">300+</h3>
                            <p className="stat-label">Done Projects</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="stat-card">
                            <h3 className="stat-number">200+</h3>
                            <p className="stat-label">Clients</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="stat-card">
                            <h3 className="stat-number">19+</h3>
                            <p className="stat-label">Pending Projects</p>
                        </div>
                    </div>
                </div>
                <div className='btn'><Button className='button-seo'>CONTACT US TO OUTRANK YOUR COMPETITORS</Button></div>
            </div>

        </section>
            {/* <div className='video-sizes'>
                <video className='video-player' controls autoPlay loop muted>
                    <source src='../video/team.mp4' type='video/mp4' />
                    Your browser does not support the video tag.
                </video>
            </div> */}
             
        </div>

    );
};

export default Seohistory1;
