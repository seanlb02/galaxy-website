import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavTab() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container className="py-3">
        <Navbar.Brand href="/">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="border-none outline-none" />
        <Navbar.Collapse id="responsive-navbar-nav">
          
          <Nav className="ms-auto d-flex gap-4 text-dark">
            <Nav.Link href="/">Contact</Nav.Link>
            <Nav.Link href="/">What we do</Nav.Link>
            <Nav.Link href="/">Pricing</Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}