// src/components/Features.js
import React from 'react';
import { Button, Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import { FaCaretDown } from "react-icons/fa6";
import './features.css';

const Features = () => {

    return (
        <div className="features-container">
            <div>
                <i className='how-text'>How we  <span className="spann">Work?</span></i>

                <p className='additional-text'>See how we can help your business grow</p>
                <div>
                    <Button className='discover-button'>Discover Our Services</Button>
                </div>
                <FaCaretDown className='icon-down' />

            </div>
            <Row gutter={[16, 16]} justify="center">
                <Col xs={24} sm={12} md={8}  >
                    <Card className='ant-cards' title="Brand Marketing" bordered={false}>
                        Our company specializes in brand marketing services, helping businesses build a strong and memorable brand identity. We create compelling brand strategies, develop consistent messaging, and enhance customer engagement to boost recognition, foster loyalty, and differentiate you from competitors. Let us elevate your brand and drive your business success.
                        <p className="learnmore"><Link to="/brandmarketingpage">Learn more</Link></p>
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={8}  >
                    <Card className='ant-cards' title="SEO" bordered={false}>
                        Our company offers expert SEO services to improve your online visibility and drive organic traffic to your website. We optimize your site’s content, structure, and keywords to enhance search engine rankings, attract more potential customers, and increase your business’s online presence. Let us help you achieve better search engine performance and grow your digital footprint.
                        <p className="learnmore"><Link to="/seopage">Learn more</Link></p>
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={8}  >
                    <Card className='ant-cards' title="E-Commerce Specialization" bordered={false}>
                        Our company provides specialized e-commerce services to enhance your online store's performance. We offer tailored solutions for platform development, user experience optimization, and digital marketing strategies to drive sales and growth. Let us help you create a seamless, engaging shopping experience and maximize your e-commerce success.
                        <p className="learnmore"><Link to="/ecommercepage">Learn more</Link></p>
                    </Card>
                </Col>
            </Row>

            {/* Second Row */}
            <Row gutter={[16, 16]} justify="center">
                <Col xs={24} sm={12} md={8}  >
                    <Card className='ant-cards' title="Digital Marketing" bordered={false}>
                        Our company offers specialized digital marketing services to elevate your online presence and drive growth. We provide customized strategies for content creation, social media management, and search engine optimization to enhance your brand’s visibility and engagement. Let us help you craft compelling digital campaigns and optimize your online performance to achieve your marketing goals.
                        <p className="learnmore">
                            <Link to="/digitalmarketingpage">Learn more</Link>

                        </p>
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={8}  >
                    <Card className='ant-cards' title="Website Development" bordered={false}>
                        Our company offers professional web development services to create and maintain high-quality, responsive websites. We design and build custom sites that enhance user experience, optimize performance, and align with your business goals. Let us bring your online vision to life and ensure your website stands out and functions seamlessly.
                        <p className="learnmore"><Link to="/webdevelopmentpage">Learn more</Link></p>
                    </Card>
                </Col>
            </Row>

        </div>
    );
}
export default Features;
