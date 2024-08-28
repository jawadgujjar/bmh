import React from 'react';
import { Image } from 'antd';
import './footer.css';

const Footer1 = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
        
          <h4 > <Image className="bmh"
                    width={50}
                    src='https://cdn.discordapp.com/attachments/1275985777267966043/1275988075838705704/BMH_Icon.png?ex=66c88cbf&is=66c73b3f&hm=fde6493610c74f92767ecf8e0bfc39bbb5909bfb4859446ed2ff48a61b694704&'
                    alt="Brand Logo"
                    preview={false}
                />
                Brand Marketing Hub</h4>
          <p>We are a leading company in providing the best services to our clients. Our mission is to deliver top-notch quality and ensure customer satisfaction.</p>
        </div>
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#privacy policy">Privacy policy</a></li>
            <li><a href="#Refund Policy">Refund Policy</a></li>
            <li><a href="#Terms Of Service">Terms Of Service</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li><a href="#web-development">Web Development</a></li>
            <li><a href="#seo">SEO</a></li>
            <li><a href="#brand-marketing">Brand Marketing</a></li>
            <li><a href="#E-Commerce Specialization">E-Commerce Specialization</a></li>
            <li><a href="#Digital Marketing">Digital Marketing</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>Email: info@bmh.com</p>
          <p>Phone: (410) 834-9965</p>
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Brand Marketing Hub. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer1;
