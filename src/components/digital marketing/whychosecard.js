import React from 'react';
import { Card, Col, Row } from 'antd';
import { FaChartLine, FaIndustry, FaCogs, FaUserFriends, FaCalendarCheck, FaMoneyBillWave } from 'react-icons/fa'; // Import icons
import './whychosecard.css'; // Import the updated CSS file


const services = [
    {
        title: "Data-driven Digital Marketing Services",
        description: "Research and data are essential parts of business success. Deliver the right message at the right time using the right platform with Thrive’s results-oriented digital marketing services. We analyze your brand’s strengths, weaknesses, opportunities and threats (SWOT) to create up-to-date metrics and generate actionable insights.",
        icon: <FaChartLine className='service-icon2' /> // Add an icon
    },
    {
        title: "Industry Experts",
        description: "Thrive is composed of digital marketing professionals who have more than 10 years of industry experience. We keep track of the latest trends and innovations, develop goal-oriented strategies and ensure all our campaigns meet search engine guidelines. Whether you need support in Walmart Marketplace integration, Shopify SEO or other digital marketing services, we can help you.",
        icon: <FaIndustry className='service-icon2' /> // Add an icon
    },
    {
        title: "Custom Digital Marketing Framework",
        description: "Our internet marketing company takes a 360-degree approach to online marketing. We review your current marketing strategies and digital presence, set key performance indicators (KPIs), identify your brand personality and integrate your customer experience in all levels of your strategy-building. In doing so, we create a structured marketing framework that optimizes all your digital touchpoints.",
        icon: <FaCogs className='service-icon2' /> // Add an icon
    },
    {
        title: "Omnichannel Personalization",
        description: "Results of a RedPoint Global survey by The Harris Poll revealed that 63 percent of consumers expect personalized brand experiences as the standard of service. At Thrive, we perform audience analyses and needs assessments to develop customized internet marketing strategies that drive more business. Omnichannel personalization increases your revenue and boosts brand loyalty.",
        icon: <FaUserFriends className='service-icon2' /> // Add an icon
    },
    {
        title: "Campaign Monitoring and Evaluation",
        description: "How do you know if the digital marketing services work for your firm? At Thrive, we establish your campaign metrics and perform regular monitoring and evaluation to determine your strategies' success. Using Google Analytics results, we adjust your online marketing tactics and improve your approach to audience targeting to put you in a stronger financial position.",
        icon: <FaCalendarCheck className='service-icon2' /> // Add an icon
    },
    {
        title: "Competitive Pricing",
        description: "Thrive Internet Marketing Agency is a customer-centric digital marketing company. We shape our internet marketing services based on your industry demands, online needs and financial capacity. In this way, we help you acquire the online attention you need without breaking the bank. We also provide white label services that offer huge ROI for your SEO agency.",
        icon: <FaMoneyBillWave className='service-icon2' /> // Add an icon
    },
];


function Whychosecard1() {
    return (
        <div className='container-digital3'>
            <div className="hirecards-container">
                <Row gutter={[16, 16]} justify="center">
                    {services.map((topic, index) => (
                        <Col xs={24} sm={12} md={8} key={index}>
                            <Card className="hirecard" hoverable bordered={false}>
                                <div className="card-icon-choose">{topic.icon}<p>{topic.title}</p>
                                </div>
                                <p className='hirecard-p-digital'>{topic.description}</p>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}

export default Whychosecard1;
