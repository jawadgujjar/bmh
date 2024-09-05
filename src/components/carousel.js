import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Card, Avatar } from 'antd';
import { Rate } from 'antd';
import './carousel.css';

const carouselItems = [
  {
    img: "../images/download.jpg", // Use absolute URLs or correct path
    name: "John Wick",
    occupation: "Broker – About Roatan Real Estate",
    review: "“Thrive exceeded our expectations in every way. They are honest, reliable, and handle all needs quickly. They deliver on their promises without any fuss.”"
  },
  {
    img: "../images/download.jpg", // Use absolute URLs or correct path
    name: "ACP",
    occupation: "Practice Manager – PARC Urology",
    review: "“Thrive is incredible. They helped us grow our business so much that our biggest challenge now is managing the overflow. We're exactly where we wanted to be, thanks to them.”"
  },
  {
    img: "../images/download.jpg", // Use absolute URLs or correct path
    name: "NINI",
    occupation: "CEO – Accurate Leak and Line",
    review: "“Working with Thrive has been a pleasure. Their dedication, exceptional support, and attention to our needs make us excited for a long-term partnership.”"
  }
];

const Car = () => (
  <div className="customerdiv">
    <h1 className="customers">From our customers</h1>
    <p className="customer">Client highlighting our services and successful results.</p>
    <div className="carousel-wrapper">
      <div className="carousel-container1">
        <Carousel>
          {carouselItems.map((item, index) => (
            <Carousel.Item key={index}>
              <div className="carousel-item-content">
                <Card className="carousel-card">
                  <Avatar className='avatar-review' src={item.img} />
                  <h5>{item.name}</h5>
                  <Rate disabled defaultValue={5} />
                  <p>{item.review}</p>
                </Card>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  </div>
);

export default Car;
