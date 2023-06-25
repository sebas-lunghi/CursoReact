import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import BootstrapNavbar from 'react-bootstrap/Navbar';

const NavbarComponent = () => {
  return (
    <>

      <BootstrapNavbar bg="primary" variant="dark">
        <Container>
          <BootstrapNavbar.Brand href="#home">CoderStore</BootstrapNavbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#catalogo">Catálogo</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
        </Container>
      </BootstrapNavbar>

      <br />

      
    </>
  );
};

export default NavbarComponent;