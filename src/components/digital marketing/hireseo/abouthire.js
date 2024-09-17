import React from 'react';
import "../aboutdigital.css";
import { Row, Col } from 'antd';

function Abouthire() {
    return (
        <div className='aboutdigital-main'>
            <Row justify="center">
                <Col
                    xs={18}   // Full width on extra small screens
                    sm={18}   // Full width on small screens
                    md={12}   // Half width on medium screens
                    lg={10}   // Slightly narrower on large screens
                    xl={10}   // Slightly narrower on extra large screens
                >
                    <p className='proven-text-digital'>
                        Proven Digital Marketing Strategies for Franchise Success
                    </p>
                    <p className='all-text-digital'>Strengthen <span className='special-text'>Your Brand and Drive Consistent </span>Leads With Targeted SEO Strategies</p>
                    <ul className='all-text-digital'>
                        <li>Low Search Rankings</li>
                        <li>Declining Organic Traffic</li>
                        <li>Duplicate Content Issues</li>
                        <li>Slow Page Load Times</li>
                        <li>High Bounce Rates</li>
                        <li>Insufficient Backlink Profile</li>
                    </ul>
                    <p className='all-text-digital'>   Partner with Our SEO Experts Today for a Comprehensive Approach to Boosting Your Online Visibility
                    </p>
                </Col>
                <Col
                    xs={22}   // Full width on extra small screens
                    sm={22}   // Full width on small screens
                    md={10}   // Half width on medium screens
                    lg={10}   // Slightly narrower on large screens
                    xl={10}   // Slightly narrower on extra large screens
                >
                    <img alt="about-digital" src="../images/hire1.svg" style={{ width: '100%', height: 'auto' }} />
                </Col>
            </Row>
        </div >
    );
}

export default Abouthire;
