import React from 'react';
import { Card, Col, Row } from 'antd';
import './aboutorigin.css';

const Aboutorigin1 = () => {
    return (
        <section id="about"> 
            <div className="origin-container">
                <div className="origin-container1">
                    <h1 className="ourorigin">OUR ORIGIN STORY</h1>
                    <h6 className="werose">
                        We rose from being average, driven by a passion for innovation and a strong desire to succeed. Our success comes from years of experience and a commitment to constantly improving.
                    </h6>
                    <div className="card-container">
                    <Row gutter={[16, 16]} justify="center">
            <Col xs={24} sm={12} md={8}  >
                <Card title="OUR MISSION:" bordered={true}>
We're on a quest to disrupt the status quo and make your business thrive in a world where only the strongest survive. We're not just a digital marketing agency - we're your partner in crime, your co-conspirator in success.
                </Card>
            </Col>
            <Col xs={24} sm={12} md={8}  >
                <Card title="CLIENT SATISFACTION:" bordered={true}>
                   As a leading IT and marketing firm, we are dedicated to delivering innovative solutions and exceptional service that exceed your expectations. Our team of experts works tirelessly to understand your unique needs and provide tailored strategies that drive results.
                </Card>
            </Col>
            <Col xs={24} sm={12} md={8}  >
                <Card title="OUR APPROACH:" bordered={true}>
                our approach combines cutting-edge technology with creative marketing strategies to deliver outstanding results. We focus on understanding your unique business needs and tailor our solutions to drive growth and success. By leveraging our extensive experience and innovative mindset, we create impactful IT and marketing solutions that challenge the status quo and help you stay ahead in a competitive landscape.
                </Card>
            </Col>
        </Row>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Aboutorigin1;
