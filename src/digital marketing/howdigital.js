import React from 'react';
import { Row, Col,  } from 'antd';

function Howdigital() {
    return (
        <div className='aboutdigital-main'>
            <p className='proven-text-digital' style={{ textAlign: "center" }}>
                How Digital Marketing Services Drive Business Growth
            </p>
            <p style={{ textAlign: "center", fontSize: "large", marginBottom: "2rem" }}>Engage Your Target Customers at the Right Time on the Right Platform

            </p>
            <Row justify="center">
                <Col
                    xs={22}   // Full width on extra small screens
                    sm={22}   // Full width on small screens
                    md={10}   // Half width on medium screens
                    lg={10}   // Slightly narrower on large screens
                    xl={10}   // Slightly narrower on extra large screens
                >
                    <img alt="about-digital" src="../images/howdigital.svg" style={{ width: '100%', height: 'auto' }} />
                </Col>
                <Col
                    xs={18}   // Full width on extra small screens
                    sm={18}   // Full width on small screens
                    md={12}   // Half width on medium screens
                    lg={10}   // Slightly narrower on large screens
                    xl={10}   // Slightly narrower on extra large screens
                >

                    <p className='all-text-digital'>Digital marketing services provide businesses of all sizes with an opportunity to market their brand 24/7 at a low cost. From startups to medium-sized enterprises to multiple-location companies, a digital marketing company helps you expand your niche market reach to offer goods and services to your target customers, irrespective of time differences or location.</p>
                    <p className='all-text-digital'>
                        Hiring an internet marketing agency is one of the best ways to reach your prospects while maintaining a robust relationship with your existing clients. As long as your business has a strong digital presence, your customers will always find you.</p>
                    <p className='all-text-digital'>    Since 2005, our digital marketing company has been partnering with <span className='special-text'>hundreds of businesses</span> in the United States to achieve their conversion goals. Throughout the years, we’ve provided an array of custom digital marketing services to our clients and generated the following results:</p>
                </Col>
            </Row>

        </div >
    );
}

export default Howdigital;
