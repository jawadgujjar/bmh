// src/components/Contact.js
import React from 'react';
import './contacts.css';

const Contact = () => {
    return (
        <section id="contact">
            <div className="container">
                <h2>Contact Us</h2>
                <form action="#" method="post">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
