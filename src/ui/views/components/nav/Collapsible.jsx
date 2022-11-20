import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import cartLogo from '../../../img/cart-svgrepo-com.svg'

function Collapsible() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
        <img
              alt="logo"
              src='https://ik.imagekit.io/zzzzzzzzzz/ZZ_TILES/Logo/LogoFondoNegro.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668968012294'
              width="100"
              height="80"
              className="d-inline-block align-top"
            />
           
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title="Catalogo" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Porcelanicos
                </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Ceramicos
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Simil Maderas
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                Porcelanatos
                </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.5">
                Ver todo
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/about">Quienes Somos?</Nav.Link>
            <Nav.Link eventKey={2} href="/contact">Contactanos</Nav.Link>
            <Nav.Link eventKey={2} href="/profile">Mi cuenta</Nav.Link>
            <Nav.Link eventKey={2} href="/cart">
                <img 
                alt='cartLogo'
                src={cartLogo} 
                width="60"
                height="25"
                className="d-inline-block align-top border-cart"
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Collapsible;