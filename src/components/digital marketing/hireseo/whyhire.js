import React from 'react';
import "../whydigital.css";
import { Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';

function Whyhire() {
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
                    <img alt="about-digital" src="../images/hire2.svg" style={{ width: '100%', height: 'auto' }} />
                </Col>
                <Col
                    xs={18}   // Full width on extra small screens
                    sm={18}   // Full width on small screens
                    md={12}   // Half width on medium screens
                    lg={10}   // Slightly narrower on large screens
                    xl={10}   // Slightly narrower on extra large screens
                >
                    <p className='proven-text-digital'>
                        Proven SEO Strategies for Franchise Success                    </p>
                    <p className='all-text-digital'>Convey <span className='special-text'>a unified brand message</span> and <span className='special-text'>drive consistent leads</span> across locations with tailored SEO strategies.</p>
                    <p className='all-text-digital'>
                        With an integrated, data-driven approach, our SEO consultants ensure your optimization plan aligns seamlessly with each business location—delivering a robust, optimized campaign for success at every level.</p>
                    <p className='all-text-digital'>Partner with our SEO experts today for a comprehensive, full-service approach to growing your online visibility and driving targeted traffic.</p>

                </Col>
            </Row>
            <div className='callaction-button'>
                <Link to="contact"><Button className="proposal-button">EVALUATE MY SITE PERFORMANCE</Button></Link>
            </div>
        </div >
    );
}

export default Whyhire;
