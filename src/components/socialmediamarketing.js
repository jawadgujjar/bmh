
import React from 'react';
import Image from '../assests/image/digitalmarketing.png';
import Image1 from '../assests/image/digital2.png';
import { Link } from 'react-router-dom'; 
import './socialmediamarketing.css';
import { FaFire  } from 'react-icons/fa';
 

 
const Socialmediamarketing1 = () => {
    return (
        <section id="about">
            <h1 className="brand">Social Media Marketing</h1>
            <div className="container">
                <div className="text-content">
                    <h2><span className="span">Social </span> Media Marketing</h2>
                    <h3>Want to boost your brand’s online presence? We’ve got you covered! From tailored content creation and social media management to smart SEO strategies, we’re here to enhance your visibility and engagement. Let’s craft compelling digital campaigns and supercharge your online performance to hit your marketing goals!.</h3>
                </div>
                <div className="image-content">
                    <img src={Image} alt="aboutus" />
                </div>
            </div>
            <div className="info-row">
            <div className="info-column">
                    <FaFire className="info-icon" />  
                    <p className="info-text">Boost Brand Awareness</p>
                    <p className="info-text1"> Ready to take your brand to the next level? Social media marketing helps you create engaging content and optimize your online presence to increase visibility and connect with your audience. Expand your reach, attract new followers, and boost your brand recognition with strategic social media tactics!.</p>
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
                    Want to reach the right audience? Social media marketing lets you target specific demographics and interests, attracting qualified leads who are more likely to convert into customers. Boost your website traffic and drive sales with precision-targeted campaigns!.</p>
                </div>
                
        </div>

        <div className="point">
        <div className="image-content1">
                <img src={Image1} alt="about us" />
            </div>
            <div className="points-list">
                <p className="points-textx">Social Media Marketing</p>
                <p className="points-text">Social Media Optimization (SMO): Enhance your profiles and posts to increase visibility and engagement across social platforms. This includes optimizing your bio, using relevant hashtags, and creating engaging visuals to boost your brand's presence.</p>
                <p className="points-text">Content Creation & Distribution: Develop and share valuable, engaging content tailored to your audience on social media. This includes eye-catching posts, videos, stories, and infographics designed to capture attention and drive interactions.</p>
                <p className="points-text">Paid Social Advertising: Use targeted social media ads to drive traffic and reach potential customers. Platforms like Facebook, Instagram, and LinkedIn allow you to run paid campaigns that target specific demographics, interests, and behaviors for maximum impact.</p>
                <p className="points-text">Social Engagement & Community Building: Foster relationships with your audience through active engagement. This involves responding to comments, running interactive polls, and participating in conversations to build a loyal community around your brand.</p>
                <div className="cta-buttons">
                    
                    <Link to="/contact" className="cta-button">Get Started</Link>
                </div>
            </div>
           
        </div>

         
         

        </section>
    );
};

export default Socialmediamarketing1;
