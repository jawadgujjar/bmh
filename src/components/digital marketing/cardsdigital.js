import React from 'react';
import { Button, Card, Col, Row } from 'antd';
import './cardsdigital.css';
import { Link } from 'react-router-dom';


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

function Cardsdigital() {
    return (
        <div className='cards-container'>
            {cardData.map((card, index) => (
                <Card
                    key={index}
                    hoverable
                    className='digital-card'
                    cover={<img className='image-digitalcard' alt={card.title} src={card.imgUrl} />}
                >
                    <div className='card-div'>
                        <p className='title-digital'>{card.title}</p>
                        <p>{card.description}</p>
                    </div>
                    <Row style={{ display: "flex", justifyContent: "space-evenly", textAlign: "center" }}>
                        <Col>
                            <p className='percent-text'>{card.firstpercent}</p>
                            <p>{card.textpercent}</p>
                        </Col>
                        <div className='divline'></div>
                        <Col>
                            <p className='percent-text'>{card.secondpercent}</p>
                            <p>{card.secondtextpercent}</p>
                        </Col>
                    </Row>
                </Card>
            ))}
            <p className='margt-cardtext'>Our digital marketing agency follows a systematic approach to ensure all our online marketing efforts deliver profitable results. Leverage Thrive’s internet marketing services today and let us help you boost your customer acquisition and retention rates.</p>
            <Link to="/contact"><Button className="proposal-button" >Let's talk </Button></Link>
        </div>
    );
}

export default Cardsdigital;
