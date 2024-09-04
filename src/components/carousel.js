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
    review: "“Thrive is a much needed blessing and exceeded our expectations in every way. They are honest, straightforward, they take care of ALL your needs quickly, they are reliable, you can count on them and most of all, they do everything they say they will do, no BS.”"
  },
  {
    img: "../images/download.jpg", // Use absolute URLs or correct path
    name: "ACP",
    occupation: "Practice Manager – PARC Urology",
    review: "“These guys are incredible. They’ve helped us to grow our business and now the biggest problem we seem to come across is having too much business – which is the ideal problem to have. We are right where we wanted to be and Thrive made that possible. Thanks guys!”"
  },
  {
    img: "../images/download.jpg", // Use absolute URLs or correct path
    name: "NINI",
    occupation: "CEO – Accurate Leak and Line",
    review: "“Working with the Thrive team has been a most pleasant experience! Their dedication and passion for what they do is exemplified by their unrivaled customer support and attentiveness to the specific needs of our business. We look forward to a long lasting and prosperous relationship!”"
  }
];

const Car = () => (
  <div className="customerdiv">
    <h1 className="customers">From our customers</h1>
    <p className="customer">Client highlighting our services and successful results.</p>
    <div className="carousel-wrapper">
      <div className="carousel-container">
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
