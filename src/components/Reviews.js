import React from 'react';
import "./reviews.css";
import { Col, Row } from 'antd';

function Reviews() {
    return (
        <Row className='review-images' justify="center">
            <Col xs={12} sm={12} md={8} lg={6} className="review-image-col">
                <img className='review-image-size' alt='google badge' src='../images/googlebadge.svg' />
            </Col>
            <Col xs={12} sm={12} md={8} lg={6} className="review-image-col">
                <img className='review-image-size' alt='facebook badge' src='../images/fbbadge.svg' />
            </Col>
            <Col xs={12} sm={12} md={8} lg={6} className="review-image-col">
                <img className='review-image-size' alt='clutch badge' src='../images/clutchbadge.svg' />
            </Col>
            <Col xs={12} sm={12} md={8} lg={6} className="review-image-col">
                <img className='review-image-size' alt='indeed badge' src='../images/indeedbadge.svg' />
            </Col>
        </Row>
    );
}

export default Reviews;
