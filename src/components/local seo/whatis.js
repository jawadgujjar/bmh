import React from 'react';
import "./whatis.css";
import { FaSearch } from 'react-icons/fa';
import { FaChartLine } from 'react-icons/fa';
import { Row, Col, Card } from 'antd';

function What() {
    return (
        <div className='what-main'>
            <p className='what-text-seo'>
                What Is Local SEO?
            </p>
            <p className='what-text-seo-subheading'>Dominate Your Niche With Strong Digital Branding</p>
            <Row justify="center">
                <Col
                    xs={18}   // Full width on extra small screens
                    sm={18}   // Full width on small screens
                    md={12}   // Half width on medium screens
                    lg={10}   // Slightly narrower on large screens
                    xl={10}   // Slightly narrower on extra large screens
                >

                    <p className='all-text-localseo'>Millions of customers are looking for local businesses every day and approximately 84 percent of prospects require digital capabilities to facilitate brand transactions. Without a robust local business SEO presence, you are missing out on valuable leads, traffic and sales opportunities.</p>
                    <p className='all-text-localseo'>
                        What is local search optimization?
                    </p>
                    <p className='all-text-localseo'>Local SEO is the process of improving the local search visibility of small and medium-sized businesses (SMBs), brick-and-mortar stores and multiple-location businesses within a geographic area.</p>



                </Col>
                <Col
                    xs={22}   // Full width on extra small screens
                    sm={22}   // Full width on small screens
                    md={10}   // Half width on medium screens
                    lg={10}   // Slightly narrower on large screens
                    xl={10}   // Slightly narrower on extra large screens
                >
                    <video
                        autoPlay
                        loop
                        muted
                        style={{ width: '100%', height: 'auto' }}
                    >
                        <source src="../video/seo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </Col>
            </Row>
            <div className='whatbottomtxt'> <p className='all-text-localseo1'> Unlike traditional SEO, which focuses on boosting a brand’s searchability on a national or global scale, local search engine optimization targets “near me” and geo-specific search queries. The goal of Google local SEO is to boost your brand exposure beyond your storefront and make your business more accessible to prospects in the local online community.</p></div>

            <Row justify="center">
    <Col
        xs={18}   // Full width on extra small screens
        sm={18}   // Full width on small screens
        md={12}   // Half width on medium screens
        lg={10}   // Slightly narrower on large screens
        xl={10}   // Slightly narrower on extra large screens
    >
        <Card className="hirecard" hoverable bordered={false} style={{ padding: '2rem' }}>
            <div className="card-icon"></div>
            <h3><FaChartLine size={30} color="black" /> What are local SEO ranking factors?</h3>
            <p className='hirecard-p1'>Google looks at various local SEO ranking factors to determine your search rankings. These include:</p>
            <ul className='bullets'>
                <li className='hirecard-p1'>Google Business Profile or Google My Business (GMB) listing</li>
                <li className='hirecard-p1'>Name, address, and phone number (NAP) consistency in local business citations</li>
                <li className='hirecard-p1'>Domain authority</li>
                <li className='hirecard-p1'>Quality of local search citations</li>
                <li className='hirecard-p1'>Click-through rate (CTR) from search results</li>
                <li className='hirecard-p1'>Keywords</li>
                <li className='hirecard-p1'>User experience (UX)</li>
                <li className='hirecard-p1'>Review quality, velocity, and diversity</li>
                <li className='hirecard-p1'>Link signals</li>
            </ul>
        </Card>
    </Col>
    <Col
        xs={22}   // Full width on extra small screens
        sm={22}   // Full width on small screens
        md={10}   // Half width on medium screens
        lg={10}   // Slightly narrower on large screens
        xl={10}   // Slightly narrower on extra large screens
    >
        <Card className="hirecard" hoverable bordered={false} style={{ padding: '2rem' }}>
            <div className="card-icon"></div>
            <h3><FaSearch size={30} color="black" /> How to do local SEO?</h3>
            <p className='hirecard-p1'>Local SEO leverages various local digital marketing tactics to rank up your local SEO ranking, including:</p>
            <ul className='bullets'>
                <li className='hirecard-p1'>Local business SEO keyword targeting</li>
                <li className='hirecard-p1'>Google Business Profile or Google My Business optimization</li>
                <li className='hirecard-p1'>Local search citations</li>
                <li className='hirecard-p1'>Online reputation management</li>
                <li className='hirecard-p1'>Link building</li>
                <li className='hirecard-p1'>On-page SEO</li>
                <li className='hirecard-p1'>SEO local landing page optimization</li>
                <li className='hirecard-p1'>Google local SEO content marketing</li>
            </ul>
        </Card>
    </Col>
</Row>
<div className='whatbottomtxt'>
    <p className='all-text-localseo1'>To compete within your service locations, understanding what is local search optimization and how to do local SEO is critical. Begin your local search optimization now and position your brand in front of your ideal audience segments.</p>
    <p className='all-text-localseo1'>Need expert help to unravel what is local SEO and how to boost your local SEO ranking? The best local SEO company can answer all your local SEO marketing questions and guide you with your local SEO optimization efforts.</p>

</div>
        </div >
    );
}

export default What;
