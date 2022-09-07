import React from 'react'
import {Nav, Navbar, Container} from 'react-bootstrap'

const Header = () => {
  return (
    <header>
         <Navbar bg="light" expand="lg" varian="dark" collapseOnSelect>
      <Container>
        <Navbar.Brand href="/">Posified</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/Cart"><i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
            <Nav.Link href="/Signin"><i className='fas fa-user'></i> Sign In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header