import React from 'react'
import { Row, Col } from 'antd';
import './capitalize.css';

function Capitalize() {
  return (
    <div>
      <div className='aboutdigital-main2'>
      <p className='proven-text-digital2'>
      Capitalize on the Best Local Business SEO and Boost Your Revenue
      </p>
      <p className='engage-text2'>
      Digital Marketing Agency is a top local SEO company based in Arlington, Texas, that provides comprehensive local SEO services to businesses worldwide. We understand that local SEO is essential to brand success. That is why we are here to assist you with your local digital marketing and local search optimization endeavors.
      </p>
      <Row justify="center" gutter={[16, 16]}>
      <Col
          xs={24}   // Full width on extra small screens
          sm={24}   // Full width on small screens
          md={12}   // Half width on medium screens
          lg={12}   // Half width on large screens
          xl={12}   // Half width on extra large screens
        >
          <p className='all-text-digital12'>As your dedicated local SEO company, we don’t just execute local SEO services and provide local business SEO reports. Our local SEO experts also explain to your team 1) what is local SEO and 2) how to do local SEO effectively. To ensure we are on the same page, we create a local SEO checklist that outlines each local SEO strategy included in your packages.</p>
          <p className='all-text-digital12'>
          No matter if you have a single location serving a local community or multiple locations across the state or country, our local search engine optimization company can help your business achieve higher rankings in your local SEO search results.</p>
           
        </Col>
        <Col
          xs={24} // Full width on extra small screens
          sm={24} // Full width on small screens
          md={12} // Half width on medium screens
          lg={12} // Half width on large screens
          xl={12} // Half width on extra large screens
          className='image-col2'
        >
          <img alt="about-digital" src="../images/staff.jpg" className='image2' />
        </Col>

        
      </Row>
      
      <p className='all-text-digital13'>Partner with our local SEO agency and leverage our proven local SEO strategies and tactics to rise above your competition.</p>
    </div>
    </div>
  )
}

export default Capitalize;
