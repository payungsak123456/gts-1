import {
	Navbar,
	Nav,
	NavDropdown,
	Form,
	FormControl,
	Button,
} from "react-bootstrap";
import Link from "next/link";

export default function TheHeader() {
	return (
		<>
			<header className="header">
				<div
					className="m-contact d-lg-none "
					id="m-contact"
					style={{ bottom: "unset" }}
				>
			
						{/* <div className="o-contact" style={{ width: "100%",paddingLeft:"20%",paddingRight:"20%" }}>
							<Link href="https://customer.gtsgold168.com">
								<a>
									<img
										className="contact-icon lazyloaded m-0"
										alt="login ufadeal"
										width="100%"
										height="60%"
										// height="32px"
										src="assets/images/logoเต็ม.png"
										// data-ll-status="loaded"
									/>
								</a>
							</Link>
						</div> */}
				
					{/* <div className="o-contact" style={{ width: "50%" }}>
						<Link href="/register">
							<div style={{ paddingLeft: "5%", paddingRight: "5%" }}>
								<a>
									<img
										className="contact-icon lazyloaded m-0"
										alt="follower ufadeal"
										width="100%"
										// height="32px"
										src="https://sv1.picz.in.th/images/2021/01/27/lv0hSv.png"
										// data-ll-status="loaded"
									/>
								</a>
							</div>
						</Link>
					</div> */}
					{/* <div className="o-contact" style={{ width: "50%" }}>
						<Link href="https://lin.ee/KE4VK7d">
							<div style={{ paddingLeft: "5%", paddingRight: "5%" }}>
								<a>
									<img
										className="contact-icon lazyloaded m-0"
										// alt="coin ufadeal"
										width="100%"
										// height="32px"
										src="https://sv1.picz.in.th/images/2021/01/27/lv0kiE.png"
										// data-ll-status="loaded"
									/>
								</a>
							</div>
						</Link>
					</div> */}
				</div>
			</header>
		</>
	);
}
