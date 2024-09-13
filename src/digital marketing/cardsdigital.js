import React from 'react';
import { Card } from 'antd';
import './cardsdigital.css';

const { Meta } = Card;

const cardData = [
    {
        title: 'Multiple-Location Orthodontic Practice Group',
        description: 'Conversion Rate Optimization (CRO)',
        imgUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
    },
    {
        title: 'Business Factors',
        description: 'SEO and Pay-Per-Click (PPC) Marketing',
        imgUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
    },
    {
        title: 'Image 3D',
        description: 'Amazon Advertising',
        imgUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
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

                </Card>
            ))}
        </div>
    );
}

export default Cardsdigital;
