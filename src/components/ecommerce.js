
import React from 'react';
import Image from '../assests/image/ecommerce.png';
import Image1 from '../assests/image/ecommerce2.png';
import { Link } from 'react-router-dom'; 
import './ecommerce.css';
import { FaFire  } from 'react-icons/fa';
 

 
const Ecommerce1 = () => {
    return (
        <section id="about">
            <h1 className="brand">E-Commerce Specialization</h1>
            <div className="container">
                <div className="text-content">
                    <h2><span className="span">E-Commerce </span>Specialization</h2>
                    <h3> We provides specialized e-commerce services to enhance your online store's performance. We offer tailored solutions for platform development, user experience optimization, and digital marketing strategies to drive sales and growth. Let us help you create a seamless, engaging shopping experience and maximize your e-commerce success.</h3>
                </div>
                <div className="image-content">
                    <img src={Image} alt="aboutus" />
                </div>
            </div>
            <div className="info-row">
            <div className="info-column">
                    <FaFire className="info-icon" />  
                    <p className="info-text">Boost Your Visibility Quickly</p>
                    <p className="info-text1"> A well-optimized product listing and store structure elevate your e-commerce site’s ranking, helping you get found faster in search results.</p>
                </div>
                <div className="info-column">
                    <FaFire className="info-icon" />  
                    <p className="info-text">Build Trust & Credibility Online</p>
                    <p className="info-text1">Positive reviews and detailed product listings demonstrate that your e-commerce store is trustworthy and reliable, enhancing your credibility with potential customers.</p>
                </div>
                <div className="info-column">
                    <FaFire className="info-icon" />  
                    <p className="info-text">Attract More Shoppers</p>
                    <p className="info-text1">
                    Enhanced online visibility leads to more customers discovering your e-commerce store, driving increased traffic and boosting sales.</p>
                </div>
                
        </div>

        <div className="point">
        <div className="image-content">
                <img src={Image1} alt="about us" />
            </div>
            <div className="points-list">
                <p className="points-textx">E-Commerce Specialization</p>
                <p className="points-text">Optimized Product Listings:Craft detailed, keyword-rich product descriptions and titles to improve search visibility and attract targeted shoppers.</p>
                <p className="points-text">Enhanced Site Structure:Organize your site for easy navigation and a seamless shopping experience, ensuring that customers can find what they’re looking for quickly.</p>
                <p className="points-text">Strategic Keyword Integration:Implement relevant keywords throughout your site to boost search engine rankings and draw in more potential buyers.</p>
                <p className="points-text">Comprehensive Analytics & Tracking:Use data insights to monitor performance, understand customer behavior, and continuously refine your strategies for better results.</p>
                <div className="cta-buttons">
                    
                    <Link to="/contact" className="cta-button">Get Started</Link>
                </div>
            </div>
           
        </div>

         
         

        </section>
    );
};

export default Ecommerce1;
