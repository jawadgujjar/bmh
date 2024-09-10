// FirstNav.js
import React from 'react';
import "./firstnav.css";
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { Form } from 'react-bootstrap';
import { Button } from 'antd';
import Modal1 from '../modal';


function FirstNav() {
    return (
        <div>
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
            <div className="modal-container hide-2">
                <Form className="d-flex search-form" >
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button className='search-button' variant="outline-light">Search</Button>
                </Form>
            </div>
            <div className="hide-on">
                <Modal1 />
            </div>
        </div>
         
        </div>

    );
}

export default FirstNav;
