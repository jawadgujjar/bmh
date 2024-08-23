// src/components/Header.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Image } from 'antd';
import localImage from '../assests/image/BMH logo.png';
import '../components/navbar.css';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
    <Container>
    
    
      <Navbar.Brand href="#home">
      {/* <Image
        width={90}
        src='https://cdn.discordapp.com/attachments/1275985777267966043/1275988075838705704/BMH_Icon.png?ex=66c88cbf&is=66c73b3f&hm=fde6493610c74f92767ecf8e0bfc39bbb5909bfb4859446ed2ff48a61b694704&'
        alt=" "
      /> */}
      Brand Marketing Hub
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact Us</Nav.Link>     
        </Nav>
        {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
      </Navbar.Collapse>
    </Container>
  </Navbar>
    );
};

export default Header;
