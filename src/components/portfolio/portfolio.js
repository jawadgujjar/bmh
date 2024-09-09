import React from 'react';
import './portfolio.css';

const PortfolioCard= ({ image, previewImage, title, description, link }) => {
    return (
        <div className="portfolio-card">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <div className="portfolio-card-inner">
                    <div className="portfolio-card-image-wrapper">
                        <img src={image} alt={title} className="portfolio-card-image" />
                        <div className="portfolio-card-hover-preview">
                            <img src={previewImage} alt={`${title} preview`} className="portfolio-preview-image" />
                        </div>
                    </div>
                    <div className="portfolio-card-content">
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                </div>
            </a>
        </div>
    );
};

const Portfolio = () => {
    const cardsData = [
        {
            image: 'https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202210052123',
            previewImage: '../images/apple.png',
            title: 'Apple Website',
            description: 'Apple’s official website showcasing their products.',
            link: 'https://www.apple.com',
        },
        {
            image: 'https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202210052123',
            previewImage: '../images/apple.png',
            title: 'Apple Store',
            description: 'Apple’s online store for purchasing products.',
            link: 'https://store.apple.com',
        },
        {
            image: 'https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202210052123',
            previewImage: '../images/apple.png',
            title: 'Apple News',
            description: 'Apple’s news section with latest updates.',
            link: 'https://news.apple.com',
        },
        {
            image: 'https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202210052123',
            previewImage: '../images/apple.png',
            title: 'Apple Support',
            description: 'Apple’s support page for customer service.',
            link: 'https://support.apple.com',
        },
      
    ];

    return (
        <div className="portfolio-wrapper">
            {cardsData.map((card, index) => (
                <PortfolioCard
                    key={index}
                    image={card.image}
                    previewImage={card.previewImage}
                    title={card.title}
                    description={card.description}
                    link={card.link}
                />
            ))}
        </div>
    );
};

export default Portfolio;
