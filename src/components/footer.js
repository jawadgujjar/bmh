import React from 'react';
import './footer.css'; 

const Footer1 = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <h1>Brand Marketing Hub</h1>
                </div>
                <nav className="footer-nav">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <div className="footer-social">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Brand Marketing Hub. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer1;
