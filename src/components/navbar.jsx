import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../assets/Light_Logo.png'
import '../styles/nav.css'
function Navigation() {
  return (
    <>
        <Navbar bg='primary' data-bs-theme="dark" expand='sm' className="bg-body-tertiary mb-3">
          <Container fluid>
          <Navbar.Brand href="/">
            <img 
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="Hunter LeClair logo"
            />
          </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-sm`}
              aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link className= 'navItem' href="/">Home</Nav.Link>
                  <Nav.Link className= 'navItem' href="/Projects">Projects</Nav.Link>
                  <Nav.Link className= 'navItem' href="/Contact">Contact</Nav.Link>
                  <Nav.Link className= 'navItem' href="/Resume">Resume</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}

export default Navigation;