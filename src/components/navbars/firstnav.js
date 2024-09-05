import React from 'react';
import "./firstnav.css";
import { Layout } from 'antd';
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';

const { Header } = Layout;

function FirstNav() {
    return (
        <div className="navbar1">
            <div className="contact-info">
                <a href="mailto:email@example.com" className="contact-link">
                    <MailOutlined /> <span>email@example.com</span>
                </a>
                <a href="tel:(123)456-7890" className="contact-link">
                    <PhoneOutlined /> <span>(123) 456-7890</span>
                </a>
            </div>
            <div className='button-center'>
                <button className='demo-button'>
                    Get a Free Proposal
                </button>
            </div>
        </div>
    )
}

export default FirstNav;
