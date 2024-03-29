import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'next/image';
import stylesheet from '../styles/Home.module.css'

export default function NavTab() {
  return (
    <Navbar className="w-[100vw] shadow-xs" collapseOnSelect expand="lg" bg="white" variant="light" fixed="top">
      <Container fluid className="py-2 w-full pe-5 ps-3 md:pe-6">
        <Navbar.Brand className={styles.logo} href="/"><Image src="/logoblue.svg" alt="company logo" height={110} width={210}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="border-none outline-none" />
        <Navbar.Collapse id="responsive-navbar-nav">
          
          <Nav className="ms-auto d-flex gap-4 text-dark">
          <Nav.Link className={styles.itemfonts}><Image height={25} width={25} alt="phone icon" src="/phone.png"></Image>02 9664 6641</Nav.Link>

            <Nav.Link className={styles.itemfonts} href="/">Home</Nav.Link>
            <Nav.Link className={styles.itemfonts} href="/#contact">Contact</Nav.Link>
            <Nav.Link className={styles.itemfonts} href="/#services">What we do</Nav.Link>
            <Nav.Link className={styles.itemfonts} href="/#pricing">Pricing</Nav.Link>

          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const styles = {
  itemfonts: "text-xl flex gap-2",
  logo: ""

}