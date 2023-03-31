
import Container from 'react-bootstrap/Container';
import React, { useState } from 'react';
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
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
  function Navbars(){
    const bg='background-color: #e3f2fd;'

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

    return(
<div>
        
        <Navbar collapseOnSelect expand="lg" bg="black" variant="dark" >
      <Container>
        <Navbar.Brand href="#home"><img src={logo} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link>
              {' '}
              <Link className="text-decoration-none text-white" to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              {' '}
              <Link className="text-decoration-none text-white" to="/book">
                Book
              </Link>
            </Nav.Link>

            <Nav.Link>
              {' '}
              <Link className="text-decoration-none text-white" to="/video">
                Video
              </Link>
            </Nav.Link>
            <Nav.Link>
              {' '}
              <Link className="text-decoration-none text-white" to="/audio">
                Audio
              </Link>
            </Nav.Link>

            <Nav.Link>
              {' '}
              <Link className="text-decoration-none text-white" to="/quizz">
              Quizzes & Exercise
              </Link>
            </Nav.Link>

            <Nav.Link>
              {' '}
              <Link className="text-decoration-none text-white" to="/Contact">
              Contact Us
              </Link>
            </Nav.Link>

            
          </Nav>
          <Nav>
            <Nav.Link>
              {' '}
              <Link className="text-decoration-none text-white" to="/register">
              Create Account
              </Link>
  
            </Nav.Link>
              <Button variant="primary" onClick={handleShow}>
              Sign in
            </Button>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email </Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
                autoFocus
              />
            </Form.Group>
          </Form>


        </Modal.Body>
        
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Sign in
          </Button>
         
        </Modal.Footer>
      </Modal>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

</div>
    );
  }
  export default Navbars;