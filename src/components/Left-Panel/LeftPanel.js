import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import './leftPanel.css';
import myImage from '../../images/profile-pic.png'

const LeftPanel = () => {
    return (
       

        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container className='left-container'>
        <Navbar.Brand className='d-flex justify-content-center'  href="#home"> <img className='left-pro-image ' src={myImage} alt="" /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto left-button d-flex justify-content-center">
                <div className='my-3'>
                    <Nav.Link href="#features"> <i class="fas fa-home"></i> Home</Nav.Link>
                    <Nav.Link href="#pricing"> <i class="fas fa-user"></i> About Me</Nav.Link>
                </div>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default LeftPanel;