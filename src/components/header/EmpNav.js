import React from 'react'
import {Navbar,NavDropdown,Container,Nav} from 'react-bootstrap';
import logo from '../../assets/logo.jpg';

const EmpNav = () => {
  return (
    <div>
      <Navbar variant="light" bg="info" expand="lg">
        <Container fluid>
            <img className ="logo" src={logo} alt="" />
            <Navbar.Toggle aria-controls="navbar-dark-example" />
            <Navbar.Collapse id="navbar-dark-example">
     
                <Nav className="me-auto">
                    <Nav.Link href="/courses">COURSES</Nav.Link> 
                    <Nav.Link href="/search">SEARCH</Nav.Link>
                    <Nav.Link href="/">LOGOUT</Nav.Link>
                </Nav>
        
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default EmpNav;