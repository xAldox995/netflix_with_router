
import { Navbar, Nav, Container } from "react-bootstrap";

const NavComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            src="https://img.icons8.com/?size=100&id=20519&format=png&color=000000"
            alt="logoNetflix"
          />
        </Navbar.Brand>
        <Nav className="me-auto d-flex flex-row">
          <Nav.Link className="ms-4" href="#">
            Home
          </Nav.Link>
          <Nav.Link className="ms-4" href="#">
            TV Shows
          </Nav.Link>
          <Nav.Link className="ms-4" href="#">
            Movies
          </Nav.Link>
          <Nav.Link className="ms-4" href="#">
            Recently Added
          </Nav.Link>
          <Nav.Link className="ms-4" href="#">
            My List
          </Nav.Link>
        </Nav>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto d-flex flex-row">
            <Nav.Link className="ms-4" href="#">
              <i className="bi bi-search"></i>
            </Nav.Link>
            <Nav.Link className="ms-4" href="#">
              KIDS
            </Nav.Link>
            <Nav.Link className="ms-4" href="#">
              <i className="bi bi-bell-fill"></i>
            </Nav.Link>
            <Nav.Link className="ms-4" href="#">
              <i className="bi bi-person-circle"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavComponent;