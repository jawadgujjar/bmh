import React from 'react';
import { Row, Col, } from 'antd';

function Howhire() {
    return (
        <div className='aboutdigital-main'>
            <p className='proven-text-digital' style={{ textAlign: "center" }}>
                How SEO Consulting Services Drive Business Growth            </p>
            <p style={{ textAlign: "center", fontSize: "large", marginBottom: "2rem" }}>
                Engage Your Target Audience With the Right SEO Strategy at the Perfect Time
            </p>

            <Row justify="center">
                <Col
                    xs={22}   // Full width on extra small screens
                    sm={22}   // Full width on small screens
                    md={10}   // Half width on medium screens
                    lg={10}   // Slightly narrower on large screens
                    xl={10}   // Slightly narrower on extra large screens
                >
                    <img alt="about-digital" src="../images/hire3.svg" style={{ width: '100%', height: 'auto' }} />
                </Col>
                <Col
                    xs={18}   // Full width on extra small screens
                    sm={18}   // Full width on small screens
                    md={12}   // Half width on medium screens
                    lg={10}   // Slightly narrower on large screens
                    xl={10}   // Slightly narrower on extra large screens
                >

                    <p className='all-text-digital'>SEO consulting services provide businesses of all sizes the opportunity to improve their online presence 24/7 at a low cost. From startups to medium-sized enterprises to multi-location companies, hiring an SEO consultant helps you expand your niche market reach and connect with your target customers, regardless of time zones or location.</p>
                    <p className='all-text-digital'>
                        Partnering with an expert SEO consultant is one of the best ways to reach potential clients while maintaining a strong relationship with your existing customers. With a well-optimized digital presence, your business will always be found by those searching for your services.</p>
                    <p className='all-text-digital'>Since 2005, our SEO consultants have partnered with <span className='special-text'>hundreds of businesses</span> across the United States to achieve their growth and conversion goals. Over the years, we’ve provided a range of tailored SEO strategies, delivering measurable results for our clients.</p>

                </Col>
            </Row>

        </div >
    );
}

export default Howhire;


