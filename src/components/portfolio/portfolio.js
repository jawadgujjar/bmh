import React from 'react';
import './portfolio.css';

const TiltedCard = ({ previewImages, title, link }) => {
  return (
    <div className="card-container">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="tilted-card">
          <div className="image-carousel">
            {previewImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${title} preview ${index + 1}`}
                className="carousel-image"
              />
            ))}
          </div>
          <div className="card-overlay">
            <h3 className="card-title">{title}</h3>
          </div>
        </div>
      </a>
    </div>
  );
};

const TiltedCards = () => {
  const cardsData = [
    {
      previewImages: [
        'https://via.placeholder.com/300x200/ff7f7f', // Replace with actual images
        'https://via.placeholder.com/300x200/7f7fff',
        'https://via.placeholder.com/300x200/7fff7f',
      ],
      title: 'Website 1',
      link: 'https://website1.com',
    },
    {
      previewImages: [
        'https://via.placeholder.com/300x200/ff7f7f', 
        'https://via.placeholder.com/300x200/7f7fff',
        'https://via.placeholder.com/300x200/7fff7f',
      ],
      title: 'Website 2',
      link: 'https://website2.com',
    },
    {
      previewImages: [
        'https://via.placeholder.com/300x200/ff7f7f', 
        'https://via.placeholder.com/300x200/7f7fff',
        'https://via.placeholder.com/300x200/7fff7f',
      ],
      title: 'Website 3',
      link: 'https://website3.com',
    },
    {
      previewImages: [
        'https://via.placeholder.com/300x200/ff7f7f', 
        'https://via.placeholder.com/300x200/7f7fff',
        'https://via.placeholder.com/300x200/7fff7f',
      ],
      title: 'Website 4',
      link: 'https://website4.com',
    },
  ];

  return (
     
    <div className="cards-wrapper">
      {cardsData.map((card, index) => (
        <TiltedCard
          key={index}
          previewImages={card.previewImages}
          title={card.title}
          link={card.link}
        />
      ))}
    </div>

 
 
  );
};

export default TiltedCards;
