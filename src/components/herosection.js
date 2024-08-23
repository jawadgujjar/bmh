// src/components/HeroSection.js
import React from 'react';
import './herosection.css';

const HeroSection = () => {
    return (
        <section>
            <div className="welcome"><h2>Welcome to Your Brand Marketing Hub</h2></div>
            <div className="hero">
                
                <p>Our <strong>SEO </strong> Specialists optimize your website to improve search engine rankings and attract <strong>organic traffic</strong>, using the latest strategies and tools to enhance visibility.  <strong> Ecommerce Specialists</strong> focus on maximizing your online store's performance, from managing product listings to developing <strong>sales strategies</strong> that boost conversions and customer satisfaction. <strong>Website Developers</strong> design and build <strong>user-friendly</strong>, visually appealing websites with <strong>cutting-edge technologies</strong>, ensuring functionality and a seamless experience across all devices. Finally, <strong>Digital Marketers</strong> craft and execute tailored marketing campaigns across various digital channels, leveraging data-driven insights to increase brand awareness and engage your target <strong>audience effectively</strong>. Together, our team delivers integrated solutions to <strong>help your business succeed</strong> in the competitive digital landscape.</p>
                <a href="#contact" className="cta-button">Get Started</a>
                <a href="#contact" className="cta-button">Get a Quote</a>
            </div>
        </section>
    );
};

export default HeroSection;
