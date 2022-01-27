import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import './leftPanel.css';
import myImage from '../../images/profile-pic.png'
import { HashLink } from 'react-router-hash-link';

const LeftPanel = () => {
    return ( 
       

        <Navbar className='navbar-style' collapseOnSelect expand="lg" bg="light" variant="light" fixed=''>
        <Container className='left-container'>
        <Navbar.Brand className='d-flex justify-content-center'  href="#home"> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        
            <Nav className="me-auto left-button d-flex justify-content-center p-5">
                <img className='left-pro-image ' src={myImage} alt="" />
                <div className='my-3 mx-3 left-btn-grp '>
                    <HashLink className='btn-hashlink' to="/#home"> <i class="fas fa-home"></i> Home</HashLink>
                    <HashLink className='btn-hashlink' to="/#about"> <i class="fas fa-user"></i> About Me</HashLink>
                    <HashLink className='btn-hashlink' to="/#myworks"> <i class="fas fa-briefcase"></i> My Works</HashLink>
                    <HashLink className='btn-hashlink' to="/#blogs"> <i class="fas fa-blog"></i> Blogs</HashLink>
                    <HashLink className='btn-hashlink' to="/#contact"> <i class="fas fa-envelope"></i> Contact</HashLink>
                </div>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default LeftPanel;