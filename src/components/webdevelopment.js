
import React from 'react';
import Image from '../assests/image/web.png';
import Image1 from '../assests/image/web2.png';
import { Link } from 'react-router-dom';
import './webdevelopment.css';
import { FaFire } from 'react-icons/fa';



const Webdevelopment1 = () => {
    return (
        <section id="about">
            <h1 className="brand">Website Development</h1>
            <div className="container">
                <div className="text-content">
                    <h2><span className="span">Website </span> Development</h2>
                    <h3>We offers professional web development services to create and maintain high-quality, responsive websites. We design and build custom sites that enhance user experience, optimize performance, and align with your business goals. Let us bring your online vision to life and ensure your website stands out and functions seamlessly.</h3>
                </div>
                <div className="image-content">
                    <img src={Image} alt="aboutus" />
                </div>
            </div>
            <div className="info-row">
                <div className="info-column">
                    <FaFire className="info-icon" />
                    <p className="info-text">Credibility & Trust</p>
                    <p className="info-text1">A professional website establishes your business as a legitimate player, fostering trust and confidence with potential customers.</p>
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
                        Convert website visitors into leads and sales through strategic calls to action, contact forms, and e-commerce functionality.</p>
                </div>
            </div>

            <div className="point">
                <div className="image-content1">
                    <img src={Image1} alt="about us" />
                </div>
                <div className="points-list">
                    <p className="points-textx">Website Development</p>
                    <p className="points-text">User Experience (UX) Design: Focus on creating a user-friendly interface that ensures easy navigation and a seamless experience for visitors. This includes intuitive layout, fast loading times, responsive design, and clear calls-to-action to enhance usability and satisfaction.</p>
                    <p className="points-text">Responsive Design: Develop your website to be fully functional and visually appealing across various devices and screen sizes, including desktops, tablets, and smartphones. Responsive design ensures that your site adapts to different devices, providing a consistent user experience.</p>
                    <p className="points-text">Search Engine Optimization (SEO):  Implement on-page SEO best practices to improve your website’s visibility in search engine results. This includes optimizing page titles, meta descriptions, headers, and images, as well as ensuring a well-structured site with relevant, keyword-rich content.</p>
                    <p className="points-text">Security and Performance:Ensure your website is secure and performs efficiently by implementing HTTPS, regular software updates, and secure coding practices. Optimize loading speeds through techniques like image compression and caching to provide a fast, reliable browsing experience.</p>
                    <div className="cta-buttons">

                        <Link to="/contact" className="cta-button">Get Started</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Webdevelopment1;
