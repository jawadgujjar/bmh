import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, useNavigate } from 'react-router-dom';
import { BiWorld } from "react-icons/bi";
import { GiPublicSpeaker } from "react-icons/gi";
import { HiDeviceMobile } from "react-icons/hi";
import { Col, Row } from 'react-bootstrap';
import "./Navbrr.css";
import Modal1 from '../modal';

function NavbarBmh() {
    const navigate = useNavigate();
    const handleNavClick = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };

    return (
        <Navbar expand="lg" className="mb-3 custom-navbar">
            <Container fluid className='container-size'>
                <Navbar.Brand as={Link} to="/" onClick={() => handleNavClick('/')}>
                    <img className='logo-width' src='bmhlogo.svg' alt="Brand Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">
                            Brand Marketing Hub
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="d-flex flex-column flex-lg-row align-items-center justify-content-between flex-grow-1 pe-3">
                            <Nav.Link as={Link} to="/home" onClick={() => handleNavClick('/home')}>Home</Nav.Link>
                            <NavDropdown title="Services" id="offcanvasNavbarDropdown">
                                <Container fluid>
                                    <Row className="g-3 service-tab">
                                        <Col xs={12} sm={6} md={4} lg={3}>
                                            <div className='image-h6'>
                                                <GiPublicSpeaker />
                                                <p className='dropdown-links'>Marketing</p>
                                            </div>
                                            <NavDropdown.Item as={Link} to="/digitalmarketingpage">Digital Marketing</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/seopage">SEO Services</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/socialmediamarketing">Social Media Marketing</NavDropdown.Item>
                                        </Col>

                                        <Col xs={12} sm={6} md={4} lg={3}>
                                            <div className='image-h6'>
                                                <BiWorld />
                                                <p className='dropdown-links'>Web Development</p>
                                            </div>
                                            <NavDropdown.Item as={Link} to="/webdevelopmentpage">Website Design</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/ecommercedevelopment">E-commerce Development</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/custom-software">Custom Software</NavDropdown.Item>
                                        </Col>

                                        <Col xs={12} sm={6} md={4} lg={3}>
                                            <div className='image-h6'>
                                                <HiDeviceMobile />
                                                <p className='dropdown-links'>App Development</p>
                                            </div>
                                            <NavDropdown.Item as={Link} to="/appdevelopment">App Development</NavDropdown.Item>
                                        </Col>
                                    </Row>
                                </Container>
                            </NavDropdown>
                            <Nav.Link as={Link} to="/about" onClick={() => handleNavClick('/about')}>Digital Marketing</Nav.Link>
                            <Nav.Link as={Link} to="/contact" onClick={() => handleNavClick('/contact')}>Web Development</Nav.Link>
                            <Nav.Link as={Link} to="/portfolio" onClick={() => handleNavClick('/portfolio')}>Portfolio</Nav.Link>
                            <Nav.Link>
                                <h6 className='h6-form'>
                                    <a href="tel:+1234567890" style={{ color: 'orange', textDecoration: 'none' }}>
                                        +123-456-7890
                                    </a>
                                </h6>
                            </Nav.Link>
                            <div className='modal-container'>
                                <Modal1 />
                            </div>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default NavbarBmh;
