import React from 'react';
import { Card, Row, Col } from 'antd';
import { SearchOutlined, BarChartOutlined, GlobalOutlined, UsergroupAddOutlined, ClockCircleOutlined, LineChartOutlined } from '@ant-design/icons';
import './seocards.css';

const seoTopics = [
    {
        title: 'Keyword Research & Strategy',
        icon: <SearchOutlined />,
        description: 'Thrive is an SEO agency that understands your niche and can boost your ranking for specific search terms. Your dedicated SEO specialist will review the keywords your website is currently ranking for, take your keyword wishlist and conduct additional keyword research to build a list that makes the most sense for your website and the competitive landscape.',
    },
    {
        title: 'Link Building',
        icon: <BarChartOutlined />,
        description: 'Backlinks are a huge component of ranking higher in search results, but not just any link! That’s why you should partner with a search engine optimization company like Thrive that has a dedicated link building team and has connections with many high-quality and relevant websites.',
    },
    {
        title: 'Technical SEO',
        icon: <GlobalOutlined />,
        description: 'Rankings can improve with optimizations on your website’s back-end, such as improving page speed. By fixing these errors, it makes it easier on search engines when they crawl your website. And when you make search engines happy, your rankings can make you even happier!',
    },
    {
        title: 'On-Page SEO',
        icon: <UsergroupAddOutlined />,
        description: 'Enhance your online visibility and earn high-quality traffic. At Thrive, we ensure our SEO services are aligned with search engines’ best practices to boost your website’s trustworthiness. Our SEO experts publish unique, value-rich content, optimize your headlines and HTML tags and utilize high-resolution images.',
    },
    {
        title: 'Off-Page SEO',
        icon: <ClockCircleOutlined />,
        description: 'Off-page optimization is crucial in establishing brand credibility and increasing online exposure. Partner with our SEO company and let us help you demonstrate your industry expertise. We leverage social media marketing, link building and influencer marketing to generate qualified links and positive ratings.',
    },
    {
        title: 'Local SEO',
        icon: <LineChartOutlined />,
        description: 'Statistics show that 64 percent of customers search for local businesses online. Improve your company’s local SEO rankings with Google Business Profile or Google My Business (GMB) optimization and attract high-intent customers. We optimize your GMB profile and manage your online reputation to grow your local following.',
    },
];

const Seocard1 = () => {
    return (
        <div className="hirecards-container">
            <Row gutter={[16, 16]} justify="center">
                {seoTopics.map((topic, index) => (
                    <Col xs={24} sm={12} md={8} key={index}>
                        <Card className="hirecard" hoverable bordered={false}>
                            <div className="card-icon">{topic.icon}</div>
                            <h3>{topic.title}</h3>
                            <p className='hirecard-p'>{topic.description}</p>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Seocard1;