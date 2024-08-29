import React from 'react';
import AliceCarousel from 'alice-carousel';

import './alicecarousel.css';

const Alice = () => {
  const items = [
    <div className="carousel-item">Item 1</div>,
    <div className="carousel-item">Item 2</div>,
    <div className="carousel-item">Item 3</div>,
    <div className="carousel-item">Item 4</div>,
    <div className="carousel-item">Item 5</div>
  ];

  return (
    <AliceCarousel
      mouseTracking
      items={items}
      autoPlay
      autoPlayInterval={3000}
      infinite
      responsive={{
        0: { items: 1 },
        600: { items: 2 },
        1024: { items: 3 }
      }}
      controlsStrategy="alternate" // Optional: Adjust how controls are handled
    />
  );
};

export default Alice;
