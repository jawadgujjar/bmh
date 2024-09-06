// FirstNav.js
import React from 'react';
import "./firstnav.css";
import { Layout } from 'antd';
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal1 from '../modal';

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
            <div className='modal-responsive'>         
                   <Modal1 />
            </div>


        </Header>
    );
}

export default FirstNav;
