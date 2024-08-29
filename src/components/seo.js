
import React from 'react';
import Image from '../assests/image/seo.png';
import Image1 from '../assests/image/seoo.png'
import './seo.css';
import { FaFire  } from 'react-icons/fa';
import FAQseo from './faqseo';

 
const Seo1 = () => {
    return (
        <section id="about">
            <h1 className="brand">SEO OPTIMIZATION SERVICES</h1>
            <div className="container">
                <div className="text-content">
                    <h2><span className="span">SEO</span>  Optimization Services</h2>
                    <h3> We provide SEO services to improve your online visibility and drive organic traffic to your website. We optimize your site’s content, structure, and keywords to enhance search engine rankings, attract more potential customers, and increase your business’s online presence. Let us help you achieve better search engine performance and grow your digital footprint.</h3>
                </div>
                <div className="image-content">
                    <img src={Image} alt="aboutus" />
                </div>
            </div>
            <div className="info-row">
            <div className="info-column">
                    <FaFire className="info-icon" />  
                    <p className="info-text">Get more Traffic & Leads</p>
                    <p className="info-text1">Attract more qualified visitors ready to convert.</p>
                </div>
                <div className="info-column">
                    <FaFire className="info-icon" />  
                    <p className="info-text">Dominate Search Rankings</p>
                    <p className="info-text1">Outrank competitors and become the authority.</p>
                </div>
                <div className="info-column">
                    <FaFire className="info-icon" />  
                    <p className="info-text">Grow Your Business</p>
                    <p className="info-text1">
                    Growth driven by powerful SEO strategies.</p>
                </div>
                
        </div>

        <div className="point">
        <div className="image-content">
                <img src={Image1} alt="about us" />
            </div>
            <div className="points-list">
                <p className="points-textx">SEO Optimization Services</p>
                <p className="points-text">GMB Optimization: Increasing your local search visibility and credibility, ensuring you find the right customers.</p>
                <p className="points-text">SEO: Developing strategies to improve your website's search engine rankings, drive organic traffic and grow.</p>
                <p className="points-text">Social Media Marketing: Creating engaging content and campaigns that build brand awareness, foster community growth, and increase conversions.</p>
                <p className="points-text">Google Ads: Developing targeted advertising solutions to reach your ideal audience, maximize ROI and grow business.</p>
                <div className="cta-buttons">
                    <a href="#contact" className="cta-button">Get Started</a>
                </div>
            </div>
           
        </div>

         
        <FAQseo/>

        </section>
    );
};

export default Seo1;
