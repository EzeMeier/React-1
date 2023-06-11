import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
  return (

    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Todo Deporte</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#remeras">Remeras</Nav.Link>
          <Nav.Link href="#pantalones">Pantalones</Nav.Link>
          <Nav.Link href="#medias">Medias</Nav.Link>
          <Nav.Link href="#zapatillas">Zapatillas</Nav.Link>
        </Nav>
        <CartWidget/>
      </Container>
    </Navbar>
  )
}

export default NavBar


