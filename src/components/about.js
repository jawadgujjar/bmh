// src/components/About.js
import React from 'react';
import Image from '../assests/image/aboutus.png'; // Ensure the path is correct
import './about.css';
import Aboutorigin1 from '../components/aboutorigin';
import Leadershipteam from './leadership';
 
 

import CircleIcon from '@mui/icons-material/Circle';
 
const About = () => {
    return (
        <section id="about">
            <h1 className="about">ABOUT US</h1>
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
    <p><CircleIcon className="circle-icon" /> Digital Marketing: Creating engaging content and campaigns that build brand awareness, foster community growth, and increase conversions.</p>
    <p><CircleIcon className="circle-icon" /> Website Development: Creating fast, secure, and responsive websites that reflect your brand's online presence.</p>
    <p><CircleIcon className="circle-icon" /> Brand Marketing: We create compelling brand strategies, develop consistent messaging, and enhance customer engagement to boost recognition, foster and loyalty.</p>
    <p><CircleIcon className="circle-icon" /> E-Commerce Specialization:We offer tailored solutions for platform development, user experience optimization, and digital marketing strategies to drive sales and growth.</p>
     
</div>

       <Aboutorigin1/>
       <Leadershipteam/>
         
        </section>
    );
};

export default About;
