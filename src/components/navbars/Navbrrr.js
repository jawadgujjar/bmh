// Navbrrr.js
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
import { Col, Form, Row } from 'react-bootstrap';
import "./Navbrr.css";
import FirstNav from './firstnav';
import { Button } from 'antd';
import Modal1 from '../modal';

function Navbrrr() {
    const navigate = useNavigate();
    const handleNavClick = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };
    const expand = 'lg';

    return (
        <div className='navbars-fixed'>
            <FirstNav />
            <Navbar expand={expand} className="custom-navbar" >
                <Container fluid>
                    <Navbar.Brand as={Link} to="/" onClick={() => handleNavClick('/')}>
                        <img className='logo-width' src='bmhlogo.svg' alt="Brand Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                Brand Marketing Hub
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="nav-links me-auto">
                                <Nav.Link as={Link} to="/home" onClick={() => handleNavClick('/home')}>Home</Nav.Link>
                                <NavDropdown
                                    title="Services"
                                    id="offcanvasNavbarDropdown-expand-lg"
                                    className="dropdown-multi-column"
                                >
                                    <Container fluid>
                                        <Row>
                                            <Col xs={12} md={4}>
                                                <div className='image-h6'>
                                                    <GiPublicSpeaker />
                                                    <p className='dropdown-links'>Marketing</p>
                                                </div>
                                                <NavDropdown.Item as={Link} to="/digital-marketing">Digital Marketing</NavDropdown.Item>
                                                <ul className='unorder-list'>
                                                    <li>Marketing Strategy Development</li>
                                                    <li>Franchise Digital Marketing</li>
                                                    <li>Enterprise Digital Marketing</li>
                                                </ul>
                                                <NavDropdown.Item as={Link} to="/seo">SEO Services</NavDropdown.Item>
                                                <ul className='unorder-list'>
                                                    <li>Technical SEO</li>
                                                    <li>Franchise SEO</li>
                                                    <li>Enterprise SEO Audit</li>
                                                    <li>SEO Audits</li>
                                                    <li>Franchise SEO Audit</li>
                                                </ul>
                                                <NavDropdown.Item as={Link} to="/social-media-marketing">Social Media Marketing</NavDropdown.Item>
                                                <ul className='unorder-list'>
                                                    <li>Social Media Management</li>
                                                    <li>Social Media Brand Management</li>
                                                    <li>Franchise Social Media</li>
                                                    <li>Enterprise Social Media</li>
                                                </ul>
                                                <NavDropdown.Item as={Link} to="/email-marketing">Email Marketing</NavDropdown.Item>
                                                <ul className='unorder-list'>
                                                    <li>Email Campaign Creation</li>
                                                    <li>Audience Segmentation</li>
                                                    <li>Automated Email Workflows</li>
                                                    <li>Personalized Email Content</li>
                                                    <li>Email Analytics & Reporting</li>
                                                </ul>
                                            </Col>

                                            <Col xs={12} md={4}>
                                                <div className='image-h6'>
                                                    <BiWorld />
                                                    <p className='dropdown-links'>Web Development</p>
                                                </div>
                                                <NavDropdown.Item as={Link} to="/web-development">Website Design</NavDropdown.Item>
                                                <NavDropdown.Item as={Link} to="/ecommerce-development">E-commerce Development</NavDropdown.Item>
                                                <NavDropdown.Item as={Link} to="/app-development">App Development</NavDropdown.Item>
                                                <NavDropdown.Item as={Link} to="/custom-software">Custom Software</NavDropdown.Item>
                                            </Col>

                                            <Col xs={12} md={4}>
                                                <div className='image-h6'>
                                                    <HiDeviceMobile />
                                                    <p className='dropdown-links'>App Development</p>
                                                </div>
                                                <NavDropdown.Item as={Link} to="/strategy-consulting">Strategy Consulting</NavDropdown.Item>
                                                <NavDropdown.Item as={Link} to="/business-consulting">Business Consulting</NavDropdown.Item>
                                                <NavDropdown.Item as={Link} to="/marketing-consulting">Marketing Consulting</NavDropdown.Item>
                                                <NavDropdown.Item as={Link} to="/it-consulting">IT Consulting</NavDropdown.Item>
                                            </Col>
                                        </Row>
                                    </Container>
                                </NavDropdown>

                                <Nav.Link as={Link} to="/about" onClick={() => handleNavClick('/about')}>About</Nav.Link>
                                <Nav.Link as={Link} to="/contact" onClick={() => handleNavClick('/contact')}>Contact Us</Nav.Link>
                                <Nav.Link as={Link} to="/portfolio" onClick={() => handleNavClick('/portfolio')}>Portfolio</Nav.Link>

                            </Nav>
                            <div className='hide-2 '>
                                <div className='modal-container'>
                                    <Modal1 />
                                </div>
                            </div>
                            <div className='hide-on '>
                                <div className='modal-container'>
                                    <Form className="d-flex search-form " >
                                        <Form.Control
                                            type="search"
                                            placeholder="Search"
                                            className="me-2"
                                            aria-label="Search"
                                        />
                                        <Button className='search-button' variant="outline-light">Search</Button>
                                    </Form></div>

                            </div>

                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>

    );
}

export default Navbrrr;
