// FirstNav.js
import React from 'react';
import "./firstnav.css";
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';

import Modal1 from '../modal'; // Assuming this is a functional modal component

function FirstNav() {
    return (
        <div className="navbar1">
            <div className="contact-info">
                {/* Email link (clickable and opens email client) */}
                <a href="mailto:email@example.com" className="contact-link">
                    <MailOutlined /> <span>Email Us</span>
                </a>

                {/* Phone number link (clickable and opens call log) */}
                <a href="tel:+1234567890" className="contact-link">
                    <PhoneOutlined /> <span>Call Us</span>
                </a>
            </div>

            {/* Modal on the right side */}
            <div className="modal-container">
                <Modal1 />
            </div>
        </div>
    );
}

export default FirstNav;
