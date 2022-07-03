import React from 'react'
import {Navbar,NavDropdown,Container,Nav} from 'react-bootstrap';
import logo from '../../assets/logo.jpg';

const Header = () => {
  return (
    <div>
      <Navbar variant="light" bg="info" expand="lg">
        <Container fluid>
          <img className ="logo" src={logo} alt="" />
          <Navbar.Toggle aria-controls="navbar-dark-example" />
          <Navbar.Collapse id="navbar-dark-example">
     
            <Nav className="me-auto">
              <Nav.Link href="/">HOME</Nav.Link>
              <Nav.Link href="/courses">COURSES</Nav.Link>

              <NavDropdown title="STUDENT" id="basic-nav-dropdown">
                <NavDropdown.Item href="/studentlogin">LOGIN</NavDropdown.Item>
                <NavDropdown.Item href="/studentenroll">Register as Student</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="EMPLOYEE" id="basic-nav-dropdown">
                <NavDropdown.Item href="/employeelogin">LOGIN</NavDropdown.Item>
                <NavDropdown.Item href="/employenroll">Register as Employer</NavDropdown.Item>
              </NavDropdown>
              
              <Nav.Link href="/adminlogin">OFFICIAL LOGIN</Nav.Link>
            </Nav>
          
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header;