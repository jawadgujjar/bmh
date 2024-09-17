import React from 'react';
import { Card, Col, Row } from 'antd';
import './providingseocards.css';
 


const cardData = [
    {
        title: 'Multiple-Location Orthodontic Practice Group',
        description: 'Conversion Rate Optimization (CRO)',
        imgUrl: '../images/card-image.png',
        firstpercent: "+226%",
        textpercent: "Top 5 keyword ranking",
        secondpercent: "+122%",
        secondtextpercent: "Monthly Leads",
    },
    {
        title: 'Business Factors',
        description: 'SEO and Pay-Per-Click (PPC) Marketing',
        imgUrl: '../images/card-image.png',
        firstpercent: "+546%",
        textpercent: "Conversion Rate",
        secondpercent: "+11,400%",
        secondtextpercent: "Live Chat",
    },
    {
        title: 'Image 3D',
        description: 'Amazon Advertising',
        imgUrl: '../images/card-image.png',
        firstpercent: "+350.26%",
        textpercent: "Sales Volume",
        secondpercent: "+451%",
        secondtextpercent: "Unit Sales",
    }
];

function Providingseo1() {
    return (
        <div className='seocards-container'>
            <div>
                <p className='texthead'>Providing SEO Solutions to Solve Your Problems</p>
                <p className='textsubhead'>Our Passion is Growing Your Online Business</p>
                <p className='textbody'>For more than 15 years, we’ve been providing SEO solutions for businesses wanting to expand their online presence, increase leads and grow their revenue. Our tried-and-true SEO techniques and practices have resulted in many success stories for clients. Here’s a few recent examples:</p>
            </div>
            {cardData.map((card, index) => (
                <Card
                    key={index}
                    hoverable
                    className='seo-card'
                    cover={<img className='image-seocard' alt={card.title} src={card.imgUrl} />}
                >
                    <div className='card-div'>
                        <p className='title-seo'>{card.title}</p>
                        <p>{card.description}</p>
                    </div>
                    <Row style={{ display: "flex", justifyContent: "space-evenly", textAlign: "center" }}>
                        <Col>
                            <p className='seocard-text'>{card.firstpercent}</p>
                            <p>{card.textpercent}</p>
                        </Col>
                        <div className='seodivline'></div>
                        <Col>
                            <p className='seocard-text'>{card.secondpercent}</p>
                            <p>{card.secondtextpercent}</p>
                        </Col>
                    </Row>
                </Card>
            ))}
            <p className='seo-cardtext'>Are you on the first page of the search engine results pages (SERPs) for keywords that match your business or brand? If not, you’re missing out on valuable leads. Search engine optimization isn’t a fad and it’s no longer an option to simply not think about it if you want to grow your business. It’s an indispensable part of any plan to market products or services and bring in more qualified leads and sales.</p>
             
        </div>
    );
}

export default Providingseo1;
