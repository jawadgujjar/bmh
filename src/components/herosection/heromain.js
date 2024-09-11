import React from 'react';
import { Col, Row } from 'antd';
import Form1 from './form';
import './heromain.css';

function HeroMain() {
    return (
        <div className='back'>
            <video autoPlay muted loop>
                <source src='../video/hero-section.mp4' type='video/mp4' />
                Your browser does not support the video tag.
            </video>
            <Row className='row-margin'>
                <Col xs={0} sm={0} md={8} lg={6} xl={6} xxl={6} />
                {/* Left side will be empty, keeping form on the right */}
                <Col xs={24} sm={24} md={16} lg={18} xl={18} xxl={18} className="form-column">
                    <Form1 />
                </Col>
            </Row>
        </div>
    );
}

export default HeroMain;
