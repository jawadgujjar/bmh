import React from 'react';
import { Carousel } from 'antd';
import './carousel.css'; // Ensure this is the correct path to your CSS file

const Car = () => (
  <div className="carousel-container">
    <Carousel autoplay>
      <div>
        <img src="https://via.placeholder.com/800x300?text=Slide+1" alt="Slide 1" className="carousel-img" />
      </div>
      <div>
        <img src="https://via.placeholder.com/800x300?text=Slide+2" alt="Slide 2" className="carousel-img" />
      </div>
      <div>
        <img src="https://via.placeholder.com/800x300?text=Slide+3" alt="Slide 3" className="carousel-img" />
      </div>
      <div>
        <img src="https://via.placeholder.com/800x300?text=Slide+4" alt="Slide 4" className="carousel-img" />
      </div>
    </Carousel>
  </div>
);

export default Car;
