// src/components/Features.js
import React from 'react';
import { Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom'; 
import Brandmarketing1 from './brandmarketing';
import Seo1 from './seo';
import './features.css';

const Features = () => (
    <div className="features-container">
        <div className="weoffers-container">
            <div className="weoffers">
                <p>How we work</p>
            </div>
            <div className="additional-text">
                <h3>Discover Our Services</h3>
                <p>See how we can help your business grow</p>
            </div>
        </div>

        
        <Row gutter={[16, 16]} justify="center">
            <Col xs={24} sm={12} md={8}  >
                <Card title="Brand Marketing" bordered={false}>
                    Our company specializes in brand marketing services, helping businesses build a strong and memorable brand identity. We create compelling brand strategies, develop consistent messaging, and enhance customer engagement to boost recognition, foster loyalty, and differentiate you from competitors. Let us elevate your brand and drive your business success.
                    <p className="learnmore"><Link to="/learn-more">Learn more</Link></p>
                </Card>
            </Col>
            <Col xs={24} sm={12} md={8}  >
                <Card title="SEO" bordered={false}>
                    Our company offers expert SEO services to improve your online visibility and drive organic traffic to your website. We optimize your site’s content, structure, and keywords to enhance search engine rankings, attract more potential customers, and increase your business’s online presence. Let us help you achieve better search engine performance and grow your digital footprint.
                    <p className="learnmore"><Link to="/learn-more">Learn more</Link></p>
                </Card>
            </Col>
            <Col xs={24} sm={12} md={8}  >
                <Card title="E-Commerce Specialization" bordered={false}>
                    Our company provides specialized e-commerce services to enhance your online store's performance. We offer tailored solutions for platform development, user experience optimization, and digital marketing strategies to drive sales and growth. Let us help you create a seamless, engaging shopping experience and maximize your e-commerce success.
                    <p className="learnmore"><Link to="/learn-more">Learn more</Link></p>
                </Card>
            </Col>
        </Row>

        {/* Second Row */}
        <Row gutter={[16, 16]} justify="center">
            <Col xs={24} sm={12} md={8}  >
            <Card title="E-Commerce Specialization" bordered={false}>
            Our company provides specialized e-commerce services to enhance your online store's performance. We offer tailored solutions for platform development, user experience optimization, and digital marketing strategies to drive sales and growth. Let us help you create a seamless, engaging shopping experience and maximize your e-commerce success.
            <p className="learnmore">
                <Link to="/learn-more">Learn more</Link>  
                
            </p>
        </Card>
            </Col>
            <Col xs={24} sm={12} md={8}  >
                <Card title="Website Development" bordered={false}>
                    Our company offers professional web development services to create and maintain high-quality, responsive websites. We design and build custom sites that enhance user experience, optimize performance, and align with your business goals. Let us bring your online vision to life and ensure your website stands out and functions seamlessly.
                    <p className="learnmore"><Link to="/learn-more">Learn more</Link></p>
                </Card>
            </Col>
        </Row>
        <Brandmarketing1/>
        <Seo1/>
    </div>
);

export default Features;
