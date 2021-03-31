import { Navbar, Nav, Container } from "react-bootstrap";
import Link from "next/link";

export default function TheHeaderTwo() {
	return (
		<>
			<div className="mx-5 pt-2 menu-logo d-lg-none" >
				<Link href="https://customer.gtsgold168.com">
					<a>
						<img
							className="contact-icon lazyloaded "
							alt="login ufadeal"
							width="100%"
							height="60%"
							// height="32px"
							src="assets/images/logoเต็ม.png"
							// data-ll-status="loaded"
						/>
					</a>
				</Link>
			</div>

			<Navbar bg="black" expand="lg">
				<Container>
					<Navbar.Brand href="/home" id="NavbarBrand" className="brand-view d-none d-lg-inline">
						<img
							src="assets/images/logoicon1.png"
							width="100"
							height="100"
							alt=""
							style={{ position: "relative", objectFit: "contain" }}
						/>
					</Navbar.Brand>
					<Navbar.Brand href="https://customer.gtsgold168.com/register?agent=gclub" className="menu-plus d-lg-none">
						<img
							alt=""
							src="https://sv1.picz.in.th/images/2021/03/31/DGklxy.png"
							className="align-top"
						/>
					</Navbar.Brand>
					<Navbar.Brand href="https://customer.gtsgold168.com/register?agent=ufa" className="menu-plus d-lg-none">
						<img
							alt=""
							src="https://sv1.picz.in.th/images/2021/03/31/DGkj41.png"
							className="align-top"
						/>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" id="basic-navbar" />
					<Navbar.Collapse id="basic-navbar-nav" className="text-center">
						<Nav className="ml-auto">
							<div className="nav-link">
								<Link href="/home">หน้าแรก</Link>
							</div>
							<div className="nav-link">
								<Link className="nav-custom-gts" href="/bacara">
									บาคาร่า
								</Link>
							</div>
							<div className="nav-link">
								<Link className="nav-custom-gts" href="/shootfish">
									ยิงปลา
								</Link>
							</div>
							<div className="nav-link">
								<Link className="nav-custom-gts" href="/slot">
									สล็อต
								</Link>
							</div>
							<div className="nav-link">
								<Link className="nav-custom-gts" href="/sport">
									แทงบอล
								</Link>
							</div>
							<div className="nav-link">
								<Link className="nav-custom-gts" href="https://customer.gtsgold168.com">
									เข้าสู่เกมส์
								</Link>
							</div>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}
