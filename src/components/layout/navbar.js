import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
} from "react-bootstrap";
export default function NavBar() {
  return (
    <>
      <Navbar expand="lg" style={{backgroundColor:'#030644'}} sticky="top">
      <Container>
        <Navbar.Brand href="/home" className="text-white">TourGuide</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/home" className="text-white">Home</Nav.Link>
            <Nav.Link href="/contact" className="text-white">Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}
