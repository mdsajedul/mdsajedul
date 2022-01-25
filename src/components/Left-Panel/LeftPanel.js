import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import './leftPanel.css';
import myImage from '../../images/profile-pic.png'

const LeftPanel = () => {
    return (
       

        <Navbar className='navbar-style' collapseOnSelect expand="lg" bg="light" variant="light" fixed=''>
        <Container className='left-container'>
        <Navbar.Brand className='d-flex justify-content-center'  href="#home"> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        
            <Nav className="me-auto left-button d-flex justify-content-center p-5">
                <img className='left-pro-image ' src={myImage} alt="" />
                <div className='my-3 mx-3'>
                    <Nav.Link href="#home"> <i class="fas fa-home"></i> Home</Nav.Link>
                    <Nav.Link href="#pricing"> <i class="fas fa-user"></i> About Me</Nav.Link>
                    <Nav.Link href="#contact"> <i class="fas fa-envelope"></i> Contact</Nav.Link>
                </div>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default LeftPanel;