import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, useNavigate } from 'react-router-dom';
import "./Navbrr.css"
import { Col, Row } from 'react-bootstrap';

function Navbrrr() {
    const navigate = useNavigate();

    const handleNavClick = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };
    const expand = 'lg';

    return (
        <Navbar expand={expand} className="custom-navbar">
            <Container fluid>
                <Navbar.Brand as={Link} to="/" onClick={() => handleNavClick('/')}>
                    <img
                        className='logo-width'
                        src='bmhlogo.svg'
                        alt="Brand Logo"
                    />
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
                                <Container>
                                    <Row>
                                        {/* Column 1 */}
                                        <Col md={4}>
                                            <h6>Marketing</h6>
                                            <NavDropdown.Item as={Link} to="/digital-marketing">Digital Marketing</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/seo">SEO Services</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/social-media-marketing">Social Media Marketing</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/email-marketing">Email Marketing</NavDropdown.Item>
                                        </Col>

                                        {/* Column 2 */}
                                        <Col md={4}>
                                            <h6>Web Development</h6>
                                            <NavDropdown.Item as={Link} to="/web-development">Website Design</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/ecommerce-development">E-commerce Development</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/app-development">App Development</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/custom-software">Custom Software</NavDropdown.Item>
                                        </Col>

                                        {/* Column 3 */}
                                        <Col md={4}>
                                            <h6>Consulting</h6>
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
                        </Nav>
                        <Form className="d-flex search-form">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button className='search-button' variant="outline-success">Search</Button>
                        </Form>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default Navbrrr;
