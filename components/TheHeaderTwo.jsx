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
							<Link className="nav-custom-gts" href="/home">
								หน้าแรก
							</Link>

							<Link className="nav-custom-gts" href="/bacara">
								บาคาร่า
							</Link>

							<Link className="nav-custom-gts" href="/shootfish">
								ยิงปลา
							</Link>

							<Link className="nav-custom-gts" href="/slot">
								สล็อต
							</Link>

							<Link className="nav-custom-gts" href="/sport">
								แทงบอล
							</Link>

							<Link className="nav-custom-gts" href="/login">
								เข้าสู่เกมส์
							</Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}
