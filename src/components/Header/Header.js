import React from 'react';
import {Navbar,Container,Nav,} from 'react-bootstrap';
import './header.css'
import Me from  '../../images/profile-pic.png' ;
import cover from  '../../images/me.png' ;
import 'animate.css';

const Header = () => {
    return (
        <div id="home">
            {/* navbar  */}
          <Navbar bg="light" expand="lg" sticky="top" className="navbar-style">
            <Container >
                <Navbar.Brand href="#home" className="nav-text">SAJEDUL</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav " className="justify-content-end" >
                <Nav >
                    <Nav.Link className="nav-text" href="#home">Home</Nav.Link>
                    <Nav.Link className="nav-text"  href="#about">About</Nav.Link>
                    <Nav.Link className="nav-text" href="#skills">Skills</Nav.Link>
                    <Nav.Link className="nav-text" href="#home">Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>

            <div className="d-flex align-items-center justify-content-center banner-container">

                <div className="banner-content">
                    <div>
                        <img className="img-style " src={Me} alt="" />
                    </div>        
                        <div className=" banner-body">
                            <div className="wrapper">
                                <div className="static-txt">
                                    <h4>Hi there,I am </h4>
                                    <h1 className="animate__flipInY">MD.SAJEDUL ISLAM</h1>
                                </div>
                                <ul className="dynamic-txts">
                                    <li><span>Software Engineer</span></li>
                                </ul>
                                <button className="btn-contact">Contact me</button>
                            </div>
                           
                        </div>
                    </div>
                   
            </div>

        </div>
    );
};

export default Header;