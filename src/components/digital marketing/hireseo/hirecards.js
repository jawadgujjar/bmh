import React from 'react';
import { Card, Row, Col } from 'antd';
import { SearchOutlined, BarChartOutlined, GlobalOutlined, UsergroupAddOutlined, ClockCircleOutlined, LineChartOutlined } from '@ant-design/icons';
import './hirecards.css';

const seoTopics = [
    {
        title: 'Boost Your Online Presence',
        icon: <SearchOutlined />,
        description: 'Improve your visibility and drive organic traffic with data-driven SEO strategies.',
    },
    {
        title: 'Targeted SEO Strategies',
        icon: <BarChartOutlined />,
        description: 'Reach the right audience with customized SEO solutions tailored to your business.',
    },
    {
        title: 'Global Reach with SEO',
        icon: <GlobalOutlined />,
        description: 'Expand your market reach with SEO strategies designed for businesses of all sizes.',
    },
    {
        title: 'Drive Consistent Leads',
        icon: <UsergroupAddOutlined />,
        description: 'Generate consistent, high-quality leads with proven SEO methods that work.',
    },
    {
        title: 'Timely SEO Solutions',
        icon: <ClockCircleOutlined />,
        description: 'Engage your customers at the right time with perfectly timed SEO strategies.',
    },
    {
        title: 'Proven Results',
        icon: <LineChartOutlined />,
        description: 'Leverage our years of experience to achieve measurable growth and success.',
    },
];

const Hirecards = () => {
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

export default Hirecards;
