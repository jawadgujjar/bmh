// FirstNav.js
import React from 'react';
import "./firstnav.css";
import { Layout } from 'antd';
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const { Header } = Layout;

function FirstNav() {
    return (
        <Header className="navbar1">
            <div className="contact-info">
                <a href="mailto:email@example.com" className="contact-link">
                    <MailOutlined /> <span>email@example.com</span>
                </a>
                <a href="tel:(123)456-7890" className="contact-link">
                    <PhoneOutlined /> <span>(123) 456-7890</span>
                </a>
            </div>
            <Form className="d-flex search-form">
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
                <Button className='search-button' variant="outline-light">Search</Button>
            </Form>
        </Header>
    );
}

export default FirstNav;
