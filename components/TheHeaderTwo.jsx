import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

export default function TheHeaderTwo() {
    return (
        <>
               
                <Navbar bg="black" expand="lg" >
                    <div className="container">
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
                                <Nav.Link href="/home">หน้าแรก</Nav.Link>
                                <Nav.Link href="/bacara">บาคาร่า</Nav.Link>
                                <Nav.Link href="/shootfish">ยิงปลา</Nav.Link>
                                <Nav.Link href="/slot">สล็อต</Nav.Link>
                                <Nav.Link href="/sport">แทงบอล</Nav.Link>
                                <Nav.Link href="/login">เข้าสู่เกมส์</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
        </>
    );
}
