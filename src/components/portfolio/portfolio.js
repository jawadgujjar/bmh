import React from 'react';
import './portfolio.css';

const PortfolioCard= ({ image, previewImage, title, description, link }) => {
    return (
        <div className="portfolio-card">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <div className="portfolio-card-inner">
                    <div className="portfolio-card-image-wrapper">
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
            previewImage: '../images/largecard.jpeg',
            title: 'Apple Website',
            description: 'Apple’s official website showcasing their products.',
            link: 'https://www.apple.com',
        },
        {
            previewImage: '../images/largecard1.jpeg',
            title: 'Apple Store',
            description: 'Apple’s online store for purchasing products.',
            link: 'https://store.apple.com',
        },
        {
            previewImage: '../images/largecard.jpeg',
            title: 'Apple Website',
            description: 'Apple’s official website showcasing their products.',
            link: 'https://www.apple.com',
        },
        {
            previewImage: '../images/largecard1.jpeg',
            title: 'Apple Store',
            description: 'Apple’s online store for purchasing products.',
            link: 'https://store.apple.com',
        },
        {
            previewImage: '../images/largecard.jpeg',
            title: 'Apple Website',
            description: 'Apple’s official website showcasing their products.',
            link: 'https://www.apple.com',
        },
        {
            previewImage: '../images/largecard1.jpeg',
            title: 'Apple Store',
            description: 'Apple’s online store for purchasing products.',
            link: 'https://store.apple.com',
        },

    ];

    return (
        <div className="portfolio-wrapper">
            {cardsData.map((card, index) => (
                <PortfolioCard
                    key={index}
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
