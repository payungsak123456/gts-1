import { Navbar, Nav, Container } from "react-bootstrap";
import Link from "next/link";

export default function TheHeaderTwo() {
  return (
    <>
      <Navbar bg="black" expand="lg">
        <Container>
          <Navbar.Brand href="#home" id="NavbarBrand">
            <img
              src="assets/images/logoicon1.png"
              width="100"
              height="100"
              alt=""
              style={{ position: "relative", objectFit: "contain" }}
              className="brand-view"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" id="basic-navbar" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className="nav-custom-gts">
                <Link href="/home">หน้าแรก</Link>
              </Nav.Link>
              <Nav.Link className="nav-custom-gts">
                <Link href="/bacara">บาคาร่า</Link>
              </Nav.Link>
              <Nav.Link className="nav-custom-gts">
                <Link href="/shootfish">ยิงปลา</Link>
              </Nav.Link>
              <Nav.Link className="nav-custom-gts">
                <Link href="/slot">สล็อต</Link>
              </Nav.Link>
              <Nav.Link className="nav-custom-gts">
                <Link href="/sport">แทงบอล</Link>
              </Nav.Link>
              <Nav.Link className="nav-custom-gts">
                <Link href="/login">เข้าสู่เกมส์</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
