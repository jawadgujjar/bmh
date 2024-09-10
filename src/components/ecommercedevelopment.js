
import React from 'react';
import Image from '../assests/image/web.png';
import Image1 from '../assests/image/web2.png';
import { Link } from 'react-router-dom'; 
import './ecommercedevelopment.css';
import { FaFire  } from 'react-icons/fa';
 

 
const Ecommercedevelopment1 = () => {
    return (
        <section id="about">
            <h1 className="brand">E-Commerce Development</h1>
            <div className="container">
                <div className="text-content">
                    <h2><span className="span">E-Commerce </span> Development</h2>
                    <h3>We offer expert E-Commerce development services to build and manage high-performing online stores. We design and develop custom eCommerce sites that enhance the shopping experience, optimize performance, and align with your business goals. Let us bring your online store vision to life, ensuring it stands out, functions flawlessly, and drives sales effectively.</h3>
                </div>
                <div className="image-content">
                    <img src={Image} alt="aboutus" />
                </div>
            </div>
            <div className="info-row">
            <div className="info-column">
                    <FaFire className="info-icon" />  
                    <p className="info-text">Credibility & Trust</p>
                    <p className="info-text1">A professional E-Commerce website establishes your business as a legitimate player, fostering trust and confidence with potential customers.</p>
                </div>
                <div className="info-column">
                    <FaFire className="info-icon" />  
                    <p className="info-text">24/7 Availability</p>
                    <p className="info-text1">Your website works tirelessly, showcasing your products or services around the clock, reaching new customers globally</p>
                </div>
                <div className="info-column">
                    <FaFire className="info-icon" />  
                    <p className="info-text">Lead Generation & Sales</p>
                    <p className="info-text1">
                    Turn your eCommerce website into a powerful sales machine with strategic calls to action, user-friendly contact forms, and seamless shopping functionality. Convert visitors into leads and customers effortlessly by optimizing your online store for maximum engagement and sales.</p>
                </div>
                
        </div>

        <div className="point">
        <div className="image-content1">
                <img src={Image1} alt="about us" />
            </div>
            <div className="points-list">
                <p className="points-textx">E-Commerce Development</p>
                <p className="points-text">User Experience (UX) Design: Create a seamless shopping experience with an intuitive interface. Ensure easy navigation, fast loading times, and responsive design, with clear calls-to-action to guide customers smoothly through their purchasing journey.</p>
                <p className="points-text">Responsive Design: Develop your eCommerce site to deliver a consistent and visually appealing experience across all devices—desktops, tablets, and smartphones. A responsive design ensures that your online store adapts perfectly to any screen size, enhancing the shopping experience for every customer.</p>
                <p className="points-text">Search Engine Optimization (SEO): Boost your store’s visibility with effective on-page SEO practices. Optimize product titles, meta descriptions, headers, and images, and structure your site with relevant, keyword-rich content to improve your rankings in search engine results.</p>
                <p className="points-text">Security and Performance: Protect your online store and ensure smooth performance by implementing HTTPS, keeping software up to date, and following secure coding practices. Optimize loading speeds with techniques like image compression and caching to provide a fast, reliable shopping experience.</p>
                <div className="cta-buttons">
                    
                    <Link to="/contact" className="cta-button">Get Started</Link>
                </div>
            </div>
           
        </div>

         
         

        </section>
    );
};

export default Ecommercedevelopment1;
