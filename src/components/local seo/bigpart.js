import React from 'react';
import { Row, Col } from 'antd';
import { FaCheck } from 'react-icons/fa';
import "./bigpart.css";

function Bigpart1() {
    const benefits = [
        "Stronger local community outreach",
        "Increased sales revenue",
        "Optimized Google My Business listing",
        "Repeat business from loyal customers",
        "High-authority local business citations",
        "More foot traffic",
        "Multi-channel local digital marketing campaigns",
        "Credible online reputation",
        "Higher local SEO ranking",
        "Enhanced Google Maps visibility",
        "More targeted website traffic",
        "Reduced advertising costs",
        "More phone calls and site inquiries from prospective clients",
        "Increased trustworthiness and market authority"
    ];

    return (
        <div>
            <div className='aboutdigital-main'>
                <div className='heading1'>
                    <p className='heading2'>Why Google My Business Is a Big Part of Local SEO</p>
                    <p className='heading3'>Expand Your Market Reach and Gain Consumer Trust</p>
                    <p className='heading3'>Google My Business, now called Google Business Profile, is a free marketing tool powered by Google that allows marketers to manage how their brand information is presented on Google Search and Google Maps. Your Google My Business page shows valuable business details – such as your company’s NAP, hours of operation, website link and customer reviews – to assist potential customers with their online search.</p>
                </div>
                <Row justify="center">
                    <Col xs={22} sm={22} md={10} lg={10} xl={10}>
                        <img alt="about-digital" src="../images/whydigital.svg" style={{ width: '100%', height: 'auto' }} />
                    </Col>
                    <Col xs={18} sm={18} md={12} lg={10} xl={10}>
                        <p className='proven-text-digital'>
                        Why should you prioritize Google My Business SEO?
                        </p>
                        <p className='all-text-digital'>Google My Business optimization is a crucial aspect of local SEO marketing. Your Google My Business page serves as one of the local SEO ranking factors, which dictate your online success. By claiming your Google My Business listing, you allow search engines to verify your brand’s existence and authenticity.</p>
                        <p className='all-text-digital'>
                        Here are more reasons you need to include Google My Business optimization in your local SEO marketing efforts:
                        </p>
                         
                    </Col>
                </Row>
                

                <div className='tick'>
                    <Row justify="center" gutter={[16, 16]}>
                        <Col xs={24} sm={12} style={{ textAlign: 'center' }}>
                            <ul style={{ textAlign: 'left', padding: 0 }}>
                                {benefits.slice(0, Math.ceil(benefits.length / 2)).map((item, index) => (
                                    <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                                        <FaCheck style={{ color: 'green', marginRight: '0.5rem' }} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </Col>
                        <Col xs={24} sm={12} style={{ textAlign: 'center' }}>
                            <ul style={{ textAlign: 'left', padding: 0 }}>
                                {benefits.slice(Math.ceil(benefits.length / 2)).map((item, index) => (
                                    <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                                        <FaCheck style={{ color: 'green', marginRight: '0.5rem' }} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </Col>
                    </Row>
                </div>
                <p className='ready'>Google My Business SEO is one of the surefire ways to help your brand earn credibility and clicks to your website. Take advantage of our Google My Business optimization service and entice more users to visit your online store and physical location.</p> 
                <p className='heading5'>Discover how our Google My Business agency can streamline your GMB SEO and overall local SEO optimization.</p>
            </div>
        </div>
    );
}

export default Bigpart1;



 