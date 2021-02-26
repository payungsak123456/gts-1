
import Link from "next/link";

export default function TheFooter() {
	return (
		<>
			<footer className="footer">
				<div className="container">
					<div className="row text-light pl-lg-5 pl-md-5">
						<div className="col-12">
							<img
								src="assets/images/home/LogoText.png"
								className="img-fluid mb-3 lazyloaded"
								alt="logo ufadeal"
								data-ll-status="loaded"
							/>
						</div>
					</div>
				</div>
				<div className="-tags-wrapper pt-2">
					<div className="container">
						<div className="x-footer-seo">
							<div className="row text-light">
								<div className="col-md-3 col-lg-3 text-center shadow-f">
									<h3>
										<strong className="text-neno-titel">เกี่ยวกับเรา</strong>
									</h3>
									<p  style={{ color: "beige" }}>
										GTS168.COM Partner of GTS168 เว็บพนันออนไลน์ แทงบอลออนไลน์
										คาสิโนออนไลน์ ครบครัน สามารถฝากถอนง่ายรวดเร็ว{" "}
									</p>
									<p  style={{ color: "beige" }}>
										GTSCASINO GTSSLOT SA Gaming Joker Gaming REDTIGER PGSLOT
										King Maker{" "}
									</p>
								</div>
								<div className="col-md-3 col-lg-3 text-center shadow-f">
									<h3>
										<strong className="text-neno-titel">CASINO</strong>
									</h3>
									<ul
										id="menu-header-menu-2"
										className="nav flex-column shadow-f"
									>
										<li className="nav-item py-0">
											<Link href="/home">
												<a>หน้าแรก</a>
											</Link>
										</li>
										<li className="nav-item py-0">
											<Link href="">
												<a>คาสิโนออนไลน์</a>
											</Link>
										</li>
										<li className="nav-item py-0">
											<Link href="/sport">
												<a>แทงบอลออนไลน์</a>
											</Link>
										</li>
										<li className="nav-item py-0">
											<Link href="/slot">
												<a>Slot ( สล็อตออนไลน์ )</a>
											</Link>
										</li>
										<li className="nav-item py-0">
											<Link href="/shootfish">
												<a>เกมยิงปลา</a>
											</Link>
										</li>
										<li className="nav-item py-0">
											<Link href="">
												<a>แทงไฮโล</a>
											</Link>
										</li>
										<li className="nav-item py-0">
											<Link href="">
												<a>ผังเว็บไซต์</a>
											</Link>
										</li>
									</ul>{" "}
								</div>
								<div className="col-md-3 col-lg-3 text-center shadow-f">
									<h3>
										<strong className="text-neno-titel">BLOG</strong>
									</h3>
									<ul id="menu-header-menu-3" className="nav flex-column">
										<li className="nav-item py-0">
											<Link href="">
												<a>หน้าแรก</a>
											</Link>
										</li>
										<li className="nav-item py-0">
											<Link href="">
												<a>คาสิโนออนไลน์</a>
											</Link>
										</li>
										<li className="nav-item py-0">
											<Link href="">
												<a>แทงบอลออนไลน์</a>
											</Link>
										</li>
										<li className="nav-item py-0">
											<Link href="">
												<a>Slot ( สล็อตออนไลน์ )</a>
											</Link>
										</li>
										<li className="nav-item py-0">
											<Link href="">
												<a>เกมยิงปลา</a>
											</Link>
										</li>
										<li className="nav-item py-0">
											<Link href="">
												<a>แทงไฮโล</a>
											</Link>
										</li>
										<li className="nav-item py-0">
											<Link href="">
												<a>ผังเว็บไซต์</a>
											</Link>
										</li>
									</ul>{" "}
								</div>
								<div className="col-md-3 col-lg-3 text-center">
									<div className="container mt-md-0 mt-xs-5">
										<img src="assets/images/footer/bank.png"></img>
									</div>
								</div>
							</div>
						</div>
						<div style={{ width: "100%" }} className="mb-5 text-center">
						
						</div>
					</div>
				</div>
				<div className="text-center mt-3 -lower-wrapper">
					<p className="mb-0" style={{ color: "white" }}>
						Copyright © 2020 GTS168. All Rights Reserved.
					</p>
				</div>
			</footer>
		</>
	);
}
