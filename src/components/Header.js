import React from 'react'
import nameLogo from './name.png'
import {Navbar, Container, Nav} from "react-bootstrap"
import {LinkContainer} from "react-router-bootstrap"

const Header = (props) => {
    //Everything within the return is jsx and vars need {} for a jsx variable and expressions (.map, if-then, etc)
    return (
            <Navbar collapseOnSelect bg="dark" variant="dark" expand="sm" sticky="top">
                <Container>
                    <Navbar.Brand><img id='nameLogo' src={nameLogo} alt='Signature' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto nav-links-custom">
                            <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
                            <LinkContainer to="/about"><Nav.Link>About</Nav.Link></LinkContainer>
                            <LinkContainer to="/portfolio"><Nav.Link>Portfolio</Nav.Link></LinkContainer>
                            <LinkContainer to="/contact"><Nav.Link>Contact</Nav.Link></LinkContainer>
                            <LinkContainer to="/resume"><Nav.Link>Resume</Nav.Link></LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}

export default Header
