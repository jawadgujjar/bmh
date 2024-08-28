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
