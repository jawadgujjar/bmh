
import React from 'react';
import Image from '../assests/image/digitalmarketing.png';
import Image1 from '../assests/image/digital2.png';
import { Link } from 'react-router-dom'; 
import './digitalmarketing.css';
import { FaFire  } from 'react-icons/fa';
 

 
const Digitalmarketing1 = () => {
    return (
        <section id="about">
            <h1 className="brand">Digital Marketing</h1>
            <div className="container">
                <div className="text-content">
                    <h2><span className="span">Digital </span> Marketing</h2>
                    <h3>We provide customized strategies for content creation, social media management, and search engine optimization to enhance your brand’s visibility and engagement. Let us help you craft compelling digital campaigns and optimize your online performance to achieve your marketing goals.</h3>
                </div>
                <div className="image-content">
                    <img src={Image} alt="aboutus" />
                </div>
            </div>
            <div className="info-row">
            <div className="info-column">
                    <FaFire className="info-icon" />  
                    <p className="info-text">Boost Brand Awareness</p>
                    <p className="info-text1"> Digital marketing helps you develop compelling content and optimize various online channels to enhance visibility and engagement. This approach broadens your reach, attracts new audiences, and boosts overall brand recognition.</p>
                </div>
                <div className="info-column">
                    <FaFire className="info-icon" />  
                    <p className="info-text">Get Customer Engagement</p>
                    <p className="info-text1">By leveraging optimized digital marketing strategies, you can build stronger relationships with your customers. Engage them through personalized content, timely responses to inquiries, and interactive campaigns across various online platforms to maintain their interest and loyalty.</p>
                </div>
                <div className="info-column">
                    <FaFire className="info-icon" />  
                    <p className="info-text">Drive Targeted Traffic</p>
                    <p className="info-text1">
                    Digital marketing enables you to target specific demographics and interests across various online channels. This approach attracts qualified leads who are more likely to convert into customers, ultimately enhancing your website traffic and driving sales.</p>
                </div>
                
        </div>

        <div className="point">
        <div className="image-content1">
                <img src={Image1} alt="about us" />
            </div>
            <div className="points-list">
                <p className="points-textx">Digital Marketing</p>
                <p className="points-text">Search Engine Optimization (SEO): Optimize your website and content to rank higher in search engine results pages (SERPs), increasing organic traffic and visibility. This includes keyword research, on-page SEO, technical SEO, and link building.</p>
                <p className="points-text">Content Marketing: Create and distribute valuable, relevant, and consistent content to attract and engage your target audience. This includes blog posts, videos, infographics, and whitepapers designed to provide value and drive traffic.</p>
                <p className="points-text">Pay-Per-Click Advertising (PPC): Use paid advertising campaigns to drive targeted traffic to your website. This includes platforms like Google Ads and social media ads, where you pay for each click or impression to reach potential customers.</p>
                <p className="points-text">Social Media Marketing (SMM): Leverage social media platforms to connect with your audience, build brand awareness, and drive engagement. This includes creating and sharing content, running targeted ads, and engaging with followers across channels like Facebook, Instagram, and LinkedIn.</p>
                <div className="cta-buttons">
                    
                    <Link to="/contact" className="cta-button">Get Started</Link>
                </div>
            </div>
           
        </div>

         
         

        </section>
    );
};

export default Digitalmarketing1;
