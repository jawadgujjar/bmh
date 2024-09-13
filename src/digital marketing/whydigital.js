import React from 'react';
import "./whydigital.css";
import { Row, Col, Button } from 'antd';

function Whydigital() {
    return (
        <div className='aboutdigital-main'>
            <Row justify="center">

                <Col
                    xs={22}   // Full width on extra small screens
                    sm={22}   // Full width on small screens
                    md={10}   // Half width on medium screens
                    lg={10}   // Slightly narrower on large screens
                    xl={10}   // Slightly narrower on extra large screens
                >
                    <img alt="about-digital" src="../images/whydigital.svg" style={{ width: '100%', height: 'auto' }} />
                </Col>
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
                    <p className='all-text-digital'>Convey <span className='special-text'>a unified brand message </span>and <span className='special-text'>drive consistent leads</span> across locations with franchise digital marketing.</p>
                    <p className='all-text-digital'>
                        With an integrated, multi-channel approach, Thrive Internet Marketing Agency ensures the enterprise marketing plan seamlessly aligns with individual franchisees across locations – launching a robust, optimized campaign poised for success at all levels.</p>
                    <p className='all-text-digital'>     Partner with Thrive today to get a holistic, full-service approach to all your digital marketing needs.
                    </p>
                </Col>
            </Row>
            <div className='callaction-button'>         
                   <Button className='proposal-button'>UNLOCK YOUR FRANCHISE’S POTENTIAL</Button>
            </div>
        </div >
    );
}

export default Whydigital;
