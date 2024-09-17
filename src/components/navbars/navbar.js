import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, useNavigate } from 'react-router-dom';
import { BiWorld } from "react-icons/bi";
import { GiPublicSpeaker } from "react-icons/gi";
import { HiDeviceMobile, HiSearch } from "react-icons/hi"; // Added HiSearch for search icon
import { Col, Row } from 'react-bootstrap';
import Modal1 from '../modal';
import "./navbar.css";

function NavbarBmh() {
    const [navbarBackground, setNavbarBackground] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false); // State for search bar visibility
    const navigate = useNavigate();

    // Handle scroll event to change navbar background color
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setNavbarBackground(true);
            } else {
                setNavbarBackground(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Handle clicks outside of the search bar to close it
    useEffect(() => {
        const handleClickOutside = (event) => {
            const searchBar = document.getElementById('search-bar');
            const searchIcon = document.getElementById('search-icon');
            if (searchBar && !searchBar.contains(event.target) && !searchIcon.contains(event.target)) {
                setIsSearchOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleNavClick = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };

    return (
        <Navbar
            expand="lg"
            className={`mb-3 custom-navbar ${navbarBackground ? 'navbar-scrolled' : 'black'}`}
            fixed='top'
        >
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
                            <NavDropdown title="Digital Marketing" id="offcanvasNavbarDropdown">
                                <Container fluid>
                                    <Row className="g-3 service-tab">
                                        <Col xs={12} sm={6} md={4} lg={3}>
                                            <div className='image-h6'>
                                                <GiPublicSpeaker />
                                                <Link style={{ textDecoration: "none" }} to="digital-marketing"> <p className='dropdown-links' >Digital Marketing</p></Link>
                                            </div>
                                            <br />
                                            <NavDropdown.Item as={Link} to="/seopage">•	SEO Company</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/socialmediamarketing">• Local SEO</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/hireseoconsultant">• Hire SEO Consultant</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/dentalseo">• Dental SEO Company</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/socialmediamarketing">• Cosmetics SEO Company</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/socialmediamarketing">• Fitness Marketing SEO</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/socialmediamarketing">• Fashion SEO Services</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/socialmediamarketing">• Jewelry SEO Company</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/socialmediamarketing">• Vaping SEO Company</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/socialmediamarketing">• Cannabis Marketing & SEO Services</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/socialmediamarketing">• Delta 8 CBD SEO Marketing Services</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/socialmediamarketing">• Ammunition and Gun Marketing Services</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/socialmediamarketing">• Automotive SEO Services and Car Rental Marketing</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/socialmediamarketing">• Small Business SEO Services</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/socialmediamarketing">• Lead Generation SEO</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/socialmediamarketing">• Ecommerce SEO</NavDropdown.Item>

                                        </Col>

                                        <Col xs={12} sm={6} md={4} lg={3}>
                                            <div className='image-h6'>
                                                <BiWorld />
                                                <p className='dropdown-links'>Web Development</p>
                                            </div>
                                            <br />

                                            <NavDropdown.Item as={Link} to="/webdevelopmentpage">Website Design</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/ecommercedevelopment">E-commerce Development</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/custom-software">Custom Software</NavDropdown.Item>
                                        </Col>

                                        <Col xs={12} sm={6} md={4} lg={3}>
                                            <div className='image-h6'>
                                                <HiDeviceMobile />
                                                <p className='dropdown-links'>App Development</p>
                                            </div>
                                            <br />

                                            <NavDropdown.Item as={Link} to="/appdevelopment">App Development</NavDropdown.Item>
                                        </Col>
                                    </Row>
                                </Container>
                            </NavDropdown>
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
                            <div className='search-container'>
                                <HiSearch
                                    id="search-icon"
                                    className="search-icon"
                                    onClick={() => setIsSearchOpen(!isSearchOpen)}
                                />
                                <div
                                    id="search-bar"
                                    className={`search-bar ${isSearchOpen ? 'show' : ''}`}
                                >
                                    <input type="text" placeholder="Search..." />
                                </div>
                            </div>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default NavbarBmh;
