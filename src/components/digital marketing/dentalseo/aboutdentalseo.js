import React from 'react';
import "../aboutdigital.css";
import { Row, Col } from 'antd';

function Aboutdental() {
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
                        Proven SEO Techniques for Dental Practice Success
                    </p>
                    <p className='all-text-digital'>
                        Strengthen <span className='special-text'>Your Dental Brand and Attract More </span>Patients with Tailored SEO Strategies. Address common challenges such as low visibility in search results, decreasing patient acquisition, content duplication, slow website performance, high visitor drop-off rates, and a weak backlink profile.
                    </p>
                    <p className='all-text-digital'>
                        Our strategies are designed to tackle these issues effectively, helping you enhance your online presence and drive more patient engagement. With our expertise, you can overcome these common obstacles and achieve a robust digital footprint for your dental practice.
                    </p>
                    <p className='all-text-digital'>
                        Partner with Our SEO Specialists Today for a Customized Approach to Elevating Your Online Presence and Growing Your Dental Practice.
                    </p>
                </Col>
                <Col
                    xs={22}   // Full width on extra small screens
                    sm={22}   // Full width on small screens
                    md={10}   // Half width on medium screens
                    lg={10}   // Slightly narrower on large screens
                    xl={10}   // Slightly narrower on extra large screens
                >
                    <img alt="about-digital" src="../images/dentist1.svg" style={{ width: '100%', height: 'auto' }} />
                </Col>
            </Row>
        </div >
    );
}

export default Aboutdental;
