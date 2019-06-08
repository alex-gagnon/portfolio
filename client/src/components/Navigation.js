import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class Navigation extends Component {
    render() {
        return (
            <Navbar variant="dark" bg="dark" expand="lg">
                <Navbar.Brand href="/" style={{marginRight: 'auto'}}>Brand</Navbar.Brand>
                <Nav>
                    <Nav.Link href="/resume">Resume</Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}

export default Navigation;