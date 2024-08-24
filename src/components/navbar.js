// src/components/Header.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Image } from 'antd';
import '../components/navbar.css';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <Image
                        width={50}
                        src='https://cdn.discordapp.com/attachments/1275985777267966043/1275988075838705704/BMH_Icon.png?ex=66c88cbf&is=66c73b3f&hm=fde6493610c74f92767ecf8e0bfc39bbb5909bfb4859446ed2ff48a61b694704&'
                        alt="Brand Logo"
                        preview={false} // Optional: Disables Ant Design preview
                    />
                    <span className="brand-name">Brand Marketing Hub</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#contact">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
