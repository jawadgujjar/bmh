// src/components/Contact.js
import React from 'react';
import {  FaClock } from 'react-icons/fa';
import { GiScales } from 'react-icons/gi';
import { AiOutlineCalculator } from 'react-icons/ai'; 
import './contacts.css';

const Contact = () => {
    return (
        <section id="contact">
            <h1 className="contact">CONTACT US</h1>
             <h4 className="gethelp">Get the Help you need</h4>
             <p className="contacttoday">Contact us today and let’s start creating something amazing together!</p>
           
             <div className="cta-buttons">
                    <a href="#contact" className="cta-button"> info@bmh.com</a>
                    <a href="#contact" className="cta-button">(410) 834-9965</a>
                </div>

                <p className="privacy">Privacy Policy</p>
             <p className="nomobile"> 1. No email or name information will be shared with third parties or affiliates for marketing or IT purposes. All other categories of information are excluded from this policy.</p>
             <p className="byproviding"> 2.By providing your email address, name and message and submitting this form, you are consenting to be contacted via email.You can opt-out of further emails by replying to the email with 'UNSUBSCRIBE'.</p>

            <div className="contact-container">
                
                <form className="contact-form" action="#" method="post">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button type="submit" className="submit-button">Send Message</button>
                </form>
            </div>

            <div className="info-row1">
            <div className="info-column">
                    <FaClock  className="info-icon" />  
                    <p className="info-text">Leverage 24/7 Support</p>
                    <p className="info-text1">We are available 24 hours a day and 7 days a week - serving you support for top-notch CDN and compatible solutions. When your web things don’t feel right, send us a message immediately, and we’ll respond.</p>
                </div>
                <div className="info-column">
                <GiScales className="info-icon" />  
                    <p className="info-text">Report Improper Content</p>
                    <p className="info-text1">It’s crucial to report any inappropriate or illegal content on your website for its wellness. Let our experts know about it and they’ll help you remove any such content and double-strengthen your web security.</p>
                </div>
                <div className="info-column">
                    <AiOutlineCalculator className="info-icon" />  
                    <p className="info-text">Resolve Payment Issues</p>
                    <p className="info-text1">
                    We gladly answer your payment and billing queries and deal with any possible issues that might be occurring on your side. Never hesitate to share your questions and problems with us, irrespective of their complexity level.</p>
                </div>
                
        </div>
        </section>
    );
};

export default Contact;
