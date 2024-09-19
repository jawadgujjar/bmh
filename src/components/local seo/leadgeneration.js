import React from 'react';
import { Row, Col } from 'antd';
import './leadgeneration.css';

function Leadgeneration() {
  return (
    <div className="leadgeneration-container">
      <div className="leadgeneration-title">
        How Local SEO Services Drive Lead Generation
        
      </div>
      <p className='make'>Make Your Brand Name More Recognizable</p>
      <div className="leadgeneration-content">
        <p>
          Several elements go into creating and executing a successful marketing plan, including lead generation and local search service. Lead generation serves as the lifeblood of your business. Without a steady stream of qualified leads, your business will struggle to make sales and expand. Local SEO, on the other hand, acts as a funnel that drives prospects into your websites.
        </p>
        <p>
          Local business SEO services, such as local citations service and Google My Business optimization service, complement your lead generation efforts by increasing your brand awareness and driving organic traffic to your website. The more people in your community can see your website, the higher your chances of acquiring clicks and converting them into potential clients.
        </p>
      </div>
      <Row justify="center">
    <Col xs={22} sm={22} md={10} lg={10} xl={10} style={{ marginRight: '16px' }}>
        <img alt="about-digital" src="../images/whydigital.svg" style={{ width: '100%', height: 'auto' }} />
    </Col>
    <Col xs={18} sm={18} md={12} lg={10} xl={10}>
        <ul className='digital-marketing-list1'>
            <li className='digital-marketing-list1-txt'>Building your local search citations</li>
            <li className='digital-marketing-list1-txt'>Gathering online reviews</li>
            <li className='digital-marketing-list1-txt'>Participating in appropriate social networks</li>
            <li className='digital-marketing-list1-txt'>Creating expert content</li>
            <li className='digital-marketing-list1-txt'>Troubleshooting any visibility problems</li>
            <li className='digital-marketing-list1-txt'>Penetrating a strategic local market</li>
            <li className='digital-marketing-list1-txt'>Ranking for business-related keywords</li>
            <li className='digital-marketing-list1-txt'>Converting page visitors into leads and sales</li>
        </ul>
    </Col>
</Row>

    </div>
  );
}

export default Leadgeneration;
