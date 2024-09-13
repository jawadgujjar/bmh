import React from 'react';
import { Row, Col } from 'antd';
import './whyyouneed.css';  

function Whyyouneed1() {
  return (
    <div className='aboutdigital-main2'>
      <p className='proven-text-digital2'>
        Why Your Business Should Be Using Digital Marketing Services
      </p>
      <p className='engage-text2'>
        Engage More Clients and Rank High On Search Results
      </p>
      <Row justify="center" gutter={[16, 16]}>
        <Col
          xs={24} // Full width on extra small screens
          sm={24} // Full width on small screens
          md={12} // Half width on medium screens
          lg={12} // Half width on large screens
          xl={12} // Half width on extra large screens
          className='image-col2'
        >
          <img alt="about-digital" src="../images/growth.jpg" className='image2' />
        </Col>

        <Col
          xs={24}   // Full width on extra small screens
          sm={24}   // Full width on small screens
          md={12}   // Half width on medium screens
          lg={12}   // Half width on large screens
          xl={12}   // Half width on extra large screens
        >
          <p className='all-text-digital12'>The online marketing industry is growing at an unprecedented rate. According to eMarketer, businesses in the U.S. spend more than $110 billion on digital advertising. With more companies investing their time and resources in online marketing, relying on your old advertising tactics is not enough to win over customers.</p>
          <p className='all-text-digital12'>
          Increase your sales volume and build a robust digital foundation with value-driven internet marketing services. Digital marketing helps you:</p>
           
        </Col>
      </Row>
      <Row justify="center" gutter={[16, 16]}>
        <Col
          xs={24}   // Full width on extra small screens
          sm={24}   // Full width on small screens
          md={12}   // Half width on medium screens
          lg={12}   // Half width on large screens
          xl={12}   // Half width on extra large screens
          className='column-content'
        >
          <ul className='bullet-list'>
            <li>Save time, money, and resources</li>
            <li>Build your brand reputation across online channels</li>
            <li>Acquire huge ROI</li>
            <li>Maximize various customer touchpoints</li>
            <li>Track your campaign results</li>
          </ul>
        </Col>

        <Col
          xs={24}   // Full width on extra small screens
          sm={24}   // Full width on small screens
          md={12}   // Half width on medium screens
          lg={12}   // Half width on large screens
          xl={12}   // Half width on extra large screens
          className='column-content'
        >
          <ul className='bullet-list'>
            <li>Promote greater consumer engagement</li>
            <li>Adjust your strategies based on analytics and data</li>
            <li>Drive profitable long-term growth</li>
            <li>Leverage precise audience targeting</li>
            <li>Improve your conversion rates</li>
          </ul>
        </Col>
      </Row>
      <Row justify="center" gutter={[16, 16]}>
      <Col
          xs={24}   // Full width on extra small screens
          sm={24}   // Full width on small screens
          md={12}   // Half width on medium screens
          lg={12}   // Half width on large screens
          xl={12}   // Half width on extra large screens
        >
          <p className='all-text-digital12'>A study presented by BrightTALK shows that 42 percent of marketing professionals find the lack of quality data their biggest barrier to lead generation. With the help of a trusted internet marketing company, you can gain a holistic view of your customer journey and competition.</p>
          <p className='all-text-digital12'>
          Don’t waste your investment in marketing techniques that do not deliver measurable results. Partner with Thrive Internet Marketing Agency today and establish your market dominance with our targeted digital marketing services.</p>
           
        </Col>
        <Col
          xs={24} // Full width on extra small screens
          sm={24} // Full width on small screens
          md={12} // Half width on medium screens
          lg={12} // Half width on large screens
          xl={12} // Half width on extra large screens
          className='image-col2'
        >
          <img alt="about-digital" src="../images/profitloss.jpg" className='image2' />
        </Col>
      </Row>
    </div>
  );
}

export default Whyyouneed1;
