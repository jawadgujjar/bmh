// src/components/HeroSection.js
import React from 'react';
import { Link } from 'react-router-dom'; 
import './herosection.css';

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
            <h2 className="welcome">Accelerating Your Business Through Innovative Brand Marketing</h2>
                <p>
                    Our <strong>SEO</strong> Specialists optimize your website to improve search engine rankings and attract <strong>organic traffic</strong>, using the latest strategies and tools to enhance visibility. <strong>E-commerce Specialists</strong> focus on maximizing your online store's performance, from managing product listings to developing <strong>sales strategies</strong> that boost conversions and customer satisfaction. <strong>Website Developers</strong> design and build <strong>user-friendly</strong>, visually appealing websites with <strong>cutting-edge technologies</strong>, ensuring functionality and a seamless experience across all devices. Finally, <strong>Digital Marketers</strong> craft and execute tailored marketing campaigns across various digital channels, leveraging data-driven insights to increase brand awareness and engage your target <strong>audience effectively</strong>. Together, our team delivers integrated solutions to <strong>help your business succeed</strong> in the competitive digital landscape.
                </p>
                <div className="cta-buttons">
                <Link to="/contact" className="cta-button">Get Started</Link>
                    <a href="#contact" className="cta-button">Get Pricing</a>
                </div>
            </div>
           
        </section>
    );
};

export default HeroSection;
