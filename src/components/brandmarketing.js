// src/components/About.js
import React from 'react';
import Image from '../assests/image/brandmarketing.png';
import Image1 from '../assests/image/digital.png'
import { Link } from 'react-router-dom'; 
import './brandmarketing.css';
import { FaFire  } from 'react-icons/fa';
 
 
 
const Brandmarketing1 = () => {
    return (
        <section id="about">
            <h1 className="brand">BRAND MARKETING</h1>
            <div className="container">
                <div className="text-content">
                    <h2><span className="span">Brand</span> Marketing</h2>
                    <h3> We helping businesses build a strong and memorable brand identity. We create compelling brand strategies, develop consistent messaging, and enhance customer engagement to boost recognition, foster loyalty, and differentiate you from competitors. Let us elevate your brand and drive your business success.</h3>
                </div>
                <div className="image-content">
                    <img src={Image} alt="aboutus" />
                </div>
            </div>
            <div className="info-row">
            <div className="info-column">
                    <FaFire className="info-icon" />  
                    <p className="info-text">Boost Brand Awareness</p>
                    <p className="info-text1">Boosting brand awareness involves strategic advertising, engaging social media, and compelling content to enhance visibility, build trust, and differentiate your brand from competitors.</p>
                </div>
                <div className="info-column">
                    <FaFire className="info-icon" />  
                    <p className="info-text">Get Customer Engagement</p>
                    <p className="info-text1">To drive customer engagement, create interactive and personalized experiences through targeted content and social media. This fosters connections, encourages participation, and builds brand loyalty.</p>
                </div>
                <div className="info-column">
                    <FaFire className="info-icon" />  
                    <p className="info-text">Drive Targeted Traffic</p>
                    <p className="info-text1">
                    Driving targeted traffic involves using SEO, PPC, and social media to attract relevant visitors to your site. This approach boosts conversions and enhances marketing effectiveness.</p>
                </div>
                
        </div>

        <div className="point">
        <div className="image-content">
                <img src={Image1} alt="about us" />
            </div>
            <div className="points-list">
                <p className="points-textx">Brand Marketing</p>
                <p className="points-text">Brand Identity: Establish a unique and recognizable brand image.</p>
                <p className="points-text">Target Audience: Identify and understand your ideal customers.</p>
                <p className="points-text">Consistent Messaging: Maintain uniformity in brand voice and messaging.</p>
                <p className="points-text">Customer Engagement: Foster meaningful interactions to build loyalty.</p>
                <div className="cta-buttons">
                <Link to="/contact" className="cta-button">Get Started</Link>
                </div>
            </div>
           
        </div>
        
         
        </section>
    );
};

export default Brandmarketing1;
