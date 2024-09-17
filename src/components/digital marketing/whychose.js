import React from 'react';
import { Row, Col } from 'antd';
import './whychose.css';  

function Whychose1() {
  return (
    <div className='aboutdigital-main2'>
      <p className='proven-text-digital2'>
      Why Choose Brand's As Your Digital Marketing Agency
      </p>
      <p className='engage-text2'>
      Boost Your Revenue Growth Rate and Achieve Online Success
      </p>
      <Row justify="center" gutter={[16, 16]}>
      <Col
          xs={24}   // Full width on extra small screens
          sm={24}   // Full width on small screens
          md={12}   // Half width on medium screens
          lg={12}   // Half width on large screens
          xl={12}   // Half width on extra large screens
        >
          <p className='all-text-digital12'>Brand Marketing Agency is an award-winning internet marketing company that provides goal-oriented advertising solutions. Our primary focus is to help businesses increase their client retention rate and maximize conversion opportunities.</p>
          <p className='all-text-digital12'>
          Trust us to give our full commitment to your brand’s digital success. Choose Thrive and gain the following advantages (and so many more digital marketing solutions):</p>
           
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
      
      
    </div>
  );
}

export default Whychose1;
