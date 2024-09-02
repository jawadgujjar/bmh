import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Image } from 'antd';
import '../components/navbar.css';

const Header = () => {
    const navigate = useNavigate();

    const handleNavClick = (path) => {
        navigate(path);
        window.scrollTo(0, 0); 
    };

    return (
        <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/home" onClick={() => handleNavClick('/home')}>
                    <Image
                        width={50}
                        src='bmhlogo.png'
                        alt="Brand Logo"
                        preview={false}
                    />
                    <span className="brand-name">Brand Marketing Hub</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/home" onClick={() => handleNavClick('/home')}>Home</Nav.Link>
                        <Nav.Link as={Link} to="/features" onClick={() => handleNavClick('/features')}>Services</Nav.Link>
                        <Nav.Link as={Link} to="/about" onClick={() => handleNavClick('/about')}>About</Nav.Link>
                        <Nav.Link as={Link} to="/contact" onClick={() => handleNavClick('/contact')}>Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
