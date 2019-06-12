import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";

class Navigation extends Component {
    render() {
        return (
            <section>
                <Navbar variant="light" bg="light" expand={"md" | "lg"} fixed="top">
                    <Navbar.Brand href="/">Brand</Navbar.Brand>
                    <Navbar>
                        <Nav>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#experience">Experience</Nav.Link>
                            <Nav.Link href="#work">Work</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar>
                    <ButtonToolbar>
                        <Button variant="outline-info" href="/resume">Resume</Button>
                    </ButtonToolbar>
                </Navbar>
            </section>
        );
    }
}

export default Navigation;