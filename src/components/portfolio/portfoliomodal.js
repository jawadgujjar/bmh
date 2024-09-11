import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { TiSocialFacebook, TiSocialYoutubeCircular } from 'react-icons/ti';
import { RiTwitterXFill } from 'react-icons/ri';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { FaThreads } from "react-icons/fa6";
import { Row, Col } from 'react-bootstrap'; // Import Row and Col
import './portfoliomodal.css'; 

const PortfolioModal1 = ({ isVisible, onClose, images }) => {
  if (!isVisible) return null;

  return (
    <div className="portfolio-modal-overlay">
      <div className="portfolio-modal-content">
        <button className="portfolio-modal-close" onClick={onClose}>X</button>
        
        <Row className="portfolio-modal-body">
          <Col md={6} className="portfolio-modal-images">
            {images.map((image, index) => (
              <img key={index} src={image} alt={`Modal Image ${index + 1}`} className="portfolio-modal-image" />
            ))}
          </Col>

          <Col md={6} className="portfolio-modal-footer">
            <div className="all-logos-contact">
              <div className='div-logos'><TiSocialFacebook /></div>
              <div className='div-logos'><RiTwitterXFill /></div>
              <div className='div-logos'><FaLinkedinIn /></div>
              <div className='div-logos'><TiSocialYoutubeCircular /></div>
              <div className='div-logos'><AiFillInstagram /></div>
              <div className='div-logos'><FaThreads /></div>
            </div>
            <div className="fontsize-call">
              <p>
                <span className='callus-text'>Call Us</span> at  
                <a href="tel:+1234567890" style={{ color: 'rgb(253, 126, 20)', textDecoration: 'none' }}>
                  +123-456-7890
                </a>
              </p>
            </div>
            <div>
              <Link to="/contact">
                <Button className='discover-button1'>Contact Us</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default PortfolioModal1;
