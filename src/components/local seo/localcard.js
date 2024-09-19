import React from 'react';
import { Card, Col, Row,Button} from 'antd';
import './localcard.css';
 


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

function Localcard1() {
    return (
        <div className='seocards-container'>
            <div>
                <p className='texthead'>Local Search Engine Optimization Services With Positive Results</p>
                <p className='textsubhead'>Stand Out in This Competitive Marketplace</p>
                <p className='textbody'>Since 2005, our local SEO firm has been actively developing local search engine optimization services that help businesses achieve their desired local market standing. Our unique approach to local SEO services for small business and multi-location firms have led to numerous client success stories:</p>
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
            <p className='seo-cardtext'>In 2020, SEOlium ranked our local SEO firm No. 1 among all U.S. digital marketing agencies for first page Google Search results with 33,804 pages ranking across zip codes and 60 URLs at the top of search engine results pages (SERPs). Our local SEO agency also claimed the third spot in search visibility and population reach, covering nearly 58 percent of the total U.S. population.</p>
            <Button className='proposal-button-herolocalseo'>GET MORE LOCAL LEADS NOW</Button>
        </div>
    );
}

export default Localcard1;
