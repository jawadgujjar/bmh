// src/components/About.js
import React from 'react';
import Image from '../assests/image/aboutus.png'; // Ensure the path is correct
import './about.css';
import CircleIcon from '@mui/icons-material/Circle';

const About = () => {
    return (
        <section id="about">
            <h1 className="about">About Us</h1>
            <div className="container">
                <div className="text-content">
                    <h2>About Brand Marketing Hub</h2>
                    <h3>At Brand Marketing Hub, we are a team of Brand marketing, Digital marketing, SEO Specialists, Web Development and creators dedicated to helping businesses thrive in the fast-paced digital landscape. Our mission is to harness technology and imagination to achieve real results and help our clients succeed.</h3>
                </div>
                <div className="image-content">
                    <img src={Image} alt="aboutus" />
                </div>
            </div>
            
            <div className="container1">
    <h2 className="ourservices">Our services Includes</h2>

    <p><CircleIcon className="circle-icon" /> SEO: Developing strategies to improve your website's search engine rankings, drive organic traffic, and grow.</p>
    <p><CircleIcon className="circle-icon" /> SEO: Developing strategies to improve your website's search engine rankings, drive organic traffic, and grow.</p>
    <p><CircleIcon className="circle-icon" /> SEO: Developing strategies to improve your website's search engine rankings, drive organic traffic, and grow.</p>
    <p><CircleIcon className="circle-icon" /> SEO: Developing strategies to improve your website's search engine rankings, drive organic traffic, and grow.</p>
    <p><CircleIcon className="circle-icon" /> SEO: Developing strategies to improve your website's search engine rankings, drive organic traffic, and grow.</p>
    <p><CircleIcon className="circle-icon" /> SEO: Developing strategies to improve your website's search engine rankings, drive organic traffic, and grow.</p>
    <p><CircleIcon className="circle-icon" /> SEO: Developing strategies to improve your website's search engine rankings, drive organic traffic, and grow.</p>
</div>

        </section>
    );
};

export default About;
