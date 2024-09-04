import React from 'react';
import { Navbar, Nav, Container, Button, Form, FormControl } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';

const Header = () => {
    const navigate = useNavigate();

    const handleNavClick = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };

    return (
        <Navbar className="navbar-custom" sticky="top" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/" onClick={() => handleNavClick('/')}>
                    <img
                        className='logo-width'
                        src='bmhlogo.svg'
                        alt="Brand Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='basic'>
                    <Nav>
                        <Nav.Link as={Link} to="/home" onClick={() => handleNavClick('/home')}>Home</Nav.Link>
                        <Nav.Link as={Link} to="/features" onClick={() => handleNavClick('/features')}>Services</Nav.Link>
                        <Nav.Link as={Link} to="/about" onClick={() => handleNavClick('/about')}>About</Nav.Link>
                        <Nav.Link as={Link} to="/contact" onClick={() => handleNavClick('/contact')}>Contact Us</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
                <Form className="d-flex search-bar">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                </Form>
            </Container>
        </Navbar >
    );
};

export default Header;
