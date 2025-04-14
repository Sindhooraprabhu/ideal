import React from "react";
import { Link } from 'react-router-dom';


import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";
import { FaShoppingCart, FaMoon } from "react-icons/fa";
import App from "../App";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand href="/">🌟 Ideal Café</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/menu">Menu</Nav.Link>
            <Nav.Link as={Link} to="/offers">Offers</Nav.Link>
            <Nav.Link as={Link} to="/locations">Locations</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            <Nav.Link href="/login">Sign In</Nav.Link>
          </Nav>
          <Form className="d-flex me-2">
            <FormControl type="search" placeholder="Search ice creams..." className="me-2" />
            <Button variant="outline-primary">Search</Button>
          </Form>
            <Button variant="outline-dark" className="me-2" onClick={() => alert('Opening Cart')}>
              <FaShoppingCart />
              </Button>

              <Button variant="outline-secondary" onClick={toggleDarkMode}>
    <FaMoon />
  </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;