import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (

    <Navbar bg="dark" variant="dark">
      
      <Container>
        <Link to= "/">
        <Navbar.Brand href="#home">Todo Deporte</Navbar.Brand>
        </Link>
        <Nav className="me-auto">
          <Nav.Link href="#remeras"> <NavLink to= "categoria/1"> Remeras </NavLink></Nav.Link>
          <Nav.Link href="#pantalones"> <NavLink to= "categoria/2">Pantalones </NavLink></Nav.Link>
          <Nav.Link href="#medias"> <NavLink to= "categoria/3"> Medias </NavLink></Nav.Link>
          <Nav.Link href="#zapatillas"><NavLink to= "categoria/4">Zapatillas </NavLink></Nav.Link>
        </Nav>
        <CartWidget/>
      </Container>
    </Navbar>
  )
}

export default NavBar


