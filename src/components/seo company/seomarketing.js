import React from 'react';
import "./seomarketing.css";
import { Row, Col } from 'antd';

function Seomarketing1() {
    return (
        <div className='seomarketing-main'>
            <Row justify="center">
                <Col
                    xs={18}   // Full width on extra small screens
                    sm={18}   // Full width on small screens
                    md={12}   // Half width on medium screens
                    lg={10}   // Slightly narrower on large screens
                    xl={10}   // Slightly narrower on extra large screens
                >
                    <p className='marketing-text-seo'>
                        An SEO Marketing Company That Gets It
                    </p>
                    <p className='all-text-seo'>Let’s face it. You know what you need but you just don’t know how to get it. Our SEO specialists hear that over and over from SEO clients who contact Thrive Internet Marketing Agency.</p>
                    <p className='all-text-seo'>
                        You’re likely here because of one or more of the following reasons:
                    </p>
                    <ul className='bullet-list-seo'>
                        <li>Your website isn’t being found online.</li>
                        <li>Your website traffic has diminished recently and you don’t know why.</li>
                        <li>Suddenly, your volume of incoming calls and leads has declined.</li>
                        <li>You’re starting a new website and want to ramp up new business quickly.</li>
                    </ul>

                    <p className='all-text-seo'> If any of these four pain points ring a bell, rest assured, you’ve come to the right SEO marketing company. There’s a reason why Thrive is currently serving hundreds of SEO clients and providing optimization solutions to answer Google’s ever-changing algorithm.
                    </p>
                </Col>
                <Col
                    xs={22}   // Full width on extra small screens
                    sm={22}   // Full width on small screens
                    md={10}   // Half width on medium screens
                    lg={10}   // Slightly narrower on large screens
                    xl={10}   // Slightly narrower on extra large screens
                >
                    <video
                        autoPlay
                        loop
                        muted
                        style={{ width: '100%', height: 'auto' }}
                    >
                        <source src="../video/seo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </Col>
            </Row>
        </div >
    );
}

export default Seomarketing1;
