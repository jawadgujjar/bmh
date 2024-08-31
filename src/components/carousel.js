import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './carousel.css'; 

const ExampleCarouselImage = ({ src, alt }) => (
  <img
    className="d-block w-100 carousel-img"
    src={src}
    alt={alt}
  />
);

const Car = () => (
  <div className="customerdiv">
     <h1 className="customers">From our customers</h1>
     <h6 className="customer">Client highlighting our services and successful results.</h6>
  <div className="carousel-wrapper">
   
    <div className="carousel-container">
      <Carousel>
        <Carousel.Item>
          <ExampleCarouselImage
            src="https://images.unsplash.com/photo-1499914485622-a88fac536970?w=800&auto=format&fit=crop&q=60"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage
            src="https://images.unsplash.com/photo-1499914485622-a88fac536970?w=800&auto=format&fit=crop&q=60"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage
            src="https://images.unsplash.com/photo-1499914485622-a88fac536970?w=800&auto=format&fit=crop&q=60"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  </div>
  </div>
);

export default Car;
