// src/components/Contact.js
import React from 'react';
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
        </section>
    );
};

export default Contact;
