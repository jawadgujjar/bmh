import React, { useState } from 'react';
import PortfolioModal1 from '../portfolio/portfoliomodal';
import './portfolio.css';

const PortfolioCard = ({ previewImage, title, description, link, onClick }) => {
  return (
    <div className="portfolio-card">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="portfolio-card-inner">
          <div className="portfolio-card-image-wrapper">
            <div className="portfolio-card-hover-preview">
              <img onClick={onClick} src={previewImage} alt={`${title} preview`} className="portfolio-preview-image" />
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);

  const handleCardClick = (images) => {
    setModalImages(images);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const cardsData = [
    {
      previewImage: '../images/largecard.jpeg',
      title: 'Apple Website',
      description: 'Apple’s official website showcasing their products.',
      images: [
        '../images/largecard.jpeg',
        '../images/largecard.jpeg',
        '../images/largecard.jpeg',
      ],
    },
    {
      previewImage: '../images/largecard1.jpeg',
      title: 'Apple Store',
      description: 'Apple’s online store for purchasing products.',
       
      images: [
        '../images/largecard.jpeg',
        '../images/largecard.jpeg',
        '../images/largecard.jpeg',
       
      ],
    },
    {
        previewImage: '../images/largecard1.jpeg',
        title: 'Apple Store',
        description: 'Apple’s online store for purchasing products.',
        
        images: [
          '../images/largecard.jpeg',
          '../images/largecard.jpeg',
          '../images/largecard.jpeg',
         
        ],
      },
      {
        previewImage: '../images/largecard1.jpeg',
        title: 'Apple Store',
        description: 'Apple’s online store for purchasing products.',
        
        images: [
          '../images/largecard.jpeg',
          '../images/largecard.jpeg',
          '../images/largecard.jpeg',
         
        ],
      },
      {
        previewImage: '../images/largecard1.jpeg',
        title: 'Apple Store',
        description: 'Apple’s online store for purchasing products.',
        
        images: [
          '../images/largecard.jpeg',
          '../images/largecard.jpeg',
          '../images/largecard.jpeg',
         
        ],
      },
    // Add more cards as needed
  ];

  return (
    <>
      <div className="portfolio-wrapper">
        {cardsData.map((card, index) => (
          <PortfolioCard
            key={index}
            previewImage={card.previewImage}
            title={card.title}
            description={card.description}
            onClick={() => handleCardClick(card.images)}
          />
        ))}
      </div>
      <PortfolioModal1
        isVisible={isModalOpen}
        onClose={handleCloseModal}
        images={modalImages}
      />
    </>
  );
};

export default Portfolio;
