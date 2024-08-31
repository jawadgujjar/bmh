// src/components/ProjectHistory.js
import React from 'react';
import './projecthistory.css';

const Projecthistory1 = () => {
    return (
        <section className="project-history">
             <h1 className="section-title">Our <span className="span">Company</span> Success</h1>
            <div className="container2">
               
                <div className="row">
                    <div className="col-md-4">
                        <div className="stat-card">
                            <h3 className="stat-number">100+</h3>
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
            </div>
        </section>
    );
};

export default Projecthistory1;
