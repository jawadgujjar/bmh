import React from 'react';
import { Row, Col } from 'antd';
import { FaCheck } from 'react-icons/fa';
import "./whylocal.css";

function Whylocal() {
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
                    <p className='heading2'>Why Local SEO Is Vital for Your Business</p>
                    <p className='heading3'>Create a Lasting Impression Across Search Engines and Your Prospects</p>
                    <p className='heading3'>In today’s competitive digital landscape, investing in the best local SEO services could mean the difference between a thriving business and a failing establishment. Where do local digital marketing and local SEO services fall in your campaign priorities?</p>
                </div>
                <Row justify="center">
                    <Col xs={22} sm={22} md={10} lg={10} xl={10}>
                        <img alt="about-digital" src="../images/whydigital.svg" style={{ width: '100%', height: 'auto' }} />
                    </Col>
                    <Col xs={18} sm={18} md={12} lg={10} xl={10}>
                        <p className='proven-text-digital'>
                            Proven Digital Marketing Strategies for Franchise Success
                        </p>
                        <p className='all-text-digital'>Convey <span className='special-text'>a unified brand message </span>and <span className='special-text'>drive consistent leads</span> across locations with franchise digital marketing.</p>
                        <p className='all-text-digital'>
                            With an integrated, multi-channel approach, Thrive Internet Marketing Agency ensures the enterprise marketing plan seamlessly aligns with individual franchisees across locations – launching a robust, optimized campaign poised for success at all levels.
                        </p>
                        <p className='all-text-digital'>Partner with Thrive today to get a holistic, full-service approach to all your digital marketing needs.</p>
                    </Col>
                </Row>
                <p className='heading4'>Still on the fence about investing in local search engine optimization services? You shouldn’t be. These are the benefits of local SEO:</p>

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
                <p className='ready'>Ready to chat about how our local SEO services can grow your business? Reach out to one of our local SEO experts and let’s talk about which local SEO packages fit your online needs.</p> 
            </div>
        </div>
    );
}

export default Whylocal;



 