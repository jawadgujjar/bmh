import { Col, Row } from 'antd';
import "./heromain.css";
import React from 'react';
import Hero from './hero';
import Form1 from './form';

function HeroMain() {
    return (
        <div className='back'>
            <div className='content'>
                <Row align="middle" className='row-margin'>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                        <Hero />
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                        <Form1 />
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default HeroMain;
