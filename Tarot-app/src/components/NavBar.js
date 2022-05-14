import React from 'react'
import {Navbar, Container} from 'react-bootstrap';

function NavBar() {
  return (
    <div>
                <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt="Logo"
                src= '../assets/logo.png'
                width="50"
                height="50"
                className="d-inline-block "
              />{' '}
            Luna Magica
            </Navbar.Brand>
          </Container>
        </Navbar>
    </div>
  )
}

export default NavBar