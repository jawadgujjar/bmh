// src/components/Contact.js
import React from 'react';
import './contacts.css';

const Contact = () => {
    return (
        <section id="contact">
            <div className="contact-container">
                <h2 className="contact-heading">Contact Us</h2>
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
