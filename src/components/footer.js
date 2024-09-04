import React from 'react';
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer1 = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">

          <h4> <Image className="bmh"
            width={50}
            src='bmhlogo.png'
            alt="Brand Logo"
            preview={false}
          />
            Brand Marketing Hub</h4>
          <p>We are a leading company in providing the best services to our clients. Our mission is to deliver top-notch quality and ensure customer satisfaction.</p>
        </div>
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><Link className="link" to="/home" >Home</Link></li>
            <li><Link className="link" to="/features" >Services</Link></li>
            <li><Link className="link" to="/about" >About</Link></li>

            <li><a href="/blog">Blog</a></li>
            <li><Link className="link" to="/privacypolicy" >Privacy Policy</Link></li>
            <li><Link className="link" to="/refundpolicy" >Refund Policy</Link></li>
            <li><Link className="link" to="/termofservice" >Term Of Service</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li><Link className="link" to="/webdevelopmentpage" >Web Development</Link></li>
            <li><Link className="link" to="/seopage" >SEO</Link></li>
            <li><Link className="link" to="/brandmarketingpage" >Brand Marketing</Link></li>
            <li><Link className="link" to="/ecommercepage" >E-Commerce Specialization</Link></li>
            <li><Link className="link" to="/digitalmarketingpage" >Digital Marketing</Link></li>

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
