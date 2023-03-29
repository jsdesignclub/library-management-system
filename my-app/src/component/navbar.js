
import Container from 'react-bootstrap/Container';
import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
  } from "react-router-dom";
import "../style/Navbar.css";
import logo from '../image/logo.png'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
  function Navbars(){
    const bg='background-color: #e3f2fd;'
    return(
<div>
        
        <Navbar collapseOnSelect expand="lg" bg="black" variant="dark" >
      <Container>
        <Navbar.Brand href="#home"><img src={logo} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href='/book'>Book</Nav.Link>
            <Nav.Link href="/video">Video</Nav.Link>
            <Nav.Link href='/audio'>Audio</Nav.Link>
            <Nav.Link href='/quize'>Quizzes & Exercise</Nav.Link>
            <Nav.Link href='/Contact'>Contact Us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Create Account</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            | Sign in
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

</div>
    );
  }
  export default Navbars;