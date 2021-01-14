import { NextSeo } from "next-seo";
import Head from "next/head";
// import GameList from "./listPage/GameList";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Home() {
	return (
		<div className="bg-image">
			<div className="container">
				<NextSeo
					title="Page Meta Title"
					description="This will be the page meta description"
					canonical="https://www.canonicalurl.ie/"
					openGraph={{
						url: "https://www.canonicalurl.ie/",
						title: "Open Graph Title",
						description: "Open Graph Description",
						images: [
							{
								url: "https://www.example.ie/og-image-01.jpg",
								width: 800,
								height: 600,
								alt: "Og Image Alt",
							},
							{
								url: "https://www.example.ie/og-image-02.jpg",
								width: 900,
								height: 800,
								alt: "Og Image Alt Second",
							},
							{ url: "https://www.example.ie/og-image-03.jpg" },
							{ url: "https://www.example.ie/og-image-04.jpg" },
						],
					}}
				/>
				<Head>
					<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
					<meta http-equiv="X-UA-Compatible" content="IE=edge" />
					<meta http-equiv="X-UA-Compatible" content="ie=edge" />
					<meta name="forntEnd-Developer" content="Mamunur Rashid" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0"
					/>
					<title> Dooplo - Gaming HTML Template</title>
					{/* <!-- favicon --> */}
					<link
						rel="shortcut icon"
						href="assets/images/favicon.png"
						type="image/x-icon"
					/>
					{/* <!-- bootstrap --> */}
					<link rel="stylesheet" href="assets/css/bootstrap.min.css" />
					{/* <!-- Plugin css --> */}
					<link rel="stylesheet" href="assets/css/plugin.css" />

					{/* <!-- stylesheet --> */}
					<link rel="stylesheet" href="assets/css/style.css" />
					{/* <!-- responsive --> */}
					<link rel="stylesheet" href="assets/css/responsive.css"></link>
				</Head>
				<div className="home">
					{/* <!-- preloader area start -->˝ */}
					{/* <div className="preloader" id="preloader">
          <div className="loader loader-1">
            <div className="loader-outter"></div>
            <div className="loader-inner"></div>
          </div>
        </div> */}
					{/* <!-- preloader area end --> */}

					{/* <!-- Header Area Start  --> */}
					<header className="header">
						{/* <!-- Top Header Area Start --> */}
						<section className="top-header">
							<div className="container">
								<div className="row">
									<div className="col-lg-12">
										<div className="content">
											<div className="left-content">
												<ul className="left-list">
													{/* <li>
                          <p>
                            <i className="fas fa-headset"></i> Support
                          </p>
                        </li>
                        <li>
                          <p>
                            <i className="fas fa-envelope"></i> info@Dooplo.com
                          </p>
                        </li>
                        <li>
                          <div className="language-selector">
                            <select name="language" className="language">
                              <option value="1">English</option>
                              <option value="2">France</option>
                              <option value="3">Japan</option>
                            </select>
                          </div>
                        </li> */}
												</ul>
											</div>
											<div className="right-content">
												<ul className="right-list">
													<li>
														<div className="input-group">
															<div className="row">
																<div className="col-sm-4">
																	{" "}
																	<div className="input-group-prepend"></div>
																	<input
																		type="text"
																		aria-label="First name"
																		className="form-control"
																		placeholder="USERNAME"
																	/>
																</div>
																<div className="col-sm-4">
																	{" "}
																	<div className="input-group-prepend"></div>
																	<input
																		type="text"
																		aria-label="First name"
																		className="form-control"
																		placeholder="PASSWORD"
																	/>
																</div>
																<div className="col-sm-4">
																	{" "}
																	<button
																		type="button"
																		className="btn btn-block text-login"
																		style={{
																			backgroundColor: "#ffc107",
																			color: "white",
																		}}
																	>
																		Login
																	</button>
																</div>
															</div>
														</div>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
						{/* <!-- Top Header Area End --> */}
						{/* <!--Main-Menu Area Start--> */}
						<div className="mainmenu-area ">
							<div className="container">
								<div className="row">
									<div className="col-lg-12">
										<nav className="navbar navbar-expand-lg navbar-light">
											<a className="navbar-brand" href="index.html">
												<img
													src="assets/images/logoicon1.png"
													width="100"
													height="100"
													alt=""
													style={{ position: "relative", top: "-6px" }}
												/>
											</a>
											<button
												className="navbar-toggler"
												type="button"
												data-toggle="collapse"
												data-target="#main_menu"
												aria-controls="main_menu"
												aria-expanded="false"
												aria-label="Toggle navigation"
											>
												<span className="navbar-toggler-icon"></span>
											</button>
											<div
												className="collapse navbar-collapse fixed-height"
												id="main_menu"
											>
												<ul className="navbar-nav ml-auto text-nav">
													<li className="nav-item ">
														<a className="nav-link " href="play.html">
															HOME
															<div className="mr-hover-effect"></div>
														</a>
													</li>
													<li className="nav-item">
														<a className="nav-link" href="lottery.html">
															CASINO
															<div className="mr-hover-effect"></div>
														</a>
													</li>
													<li className="nav-item">
														<a className="nav-link" href="tournaments.html">
															SPORTS
															<div className="mr-hover-effect"></div>
														</a>
													</li>

													<li className="nav-item">
														<a className="nav-link" href="contact.html">
															SLOT
															<div className="mr-hover-effect"></div>
														</a>
													</li>
													<li className="nav-item">
														<a className="nav-link" href="contact.html">
															BARCARA
															<div className="mr-hover-effect"></div>
														</a>
													</li>
												</ul>
											</div>
										</nav>
									</div>
								</div>
							</div>
						</div>
						{/* <!--Main-Menu Area Start--> */}
					</header>
					{/* <!-- Header Area End  --> */}

					<div
						id="topbar2"
						class="fxx tt_open2"
					>
	

						<a
							class="tt_l mb-5 tt_img_fixed2"
							target="_blank"
							href="https://sagame6699.com/gameplay"
						>
							<img src="https://sagame6699.com/wp-content/uploads/2020/10/b5-min.jpg" />
						</a>

						<a
							class="tt_l mb-5 tt_img_fixed2"
							target="_blank"
							href="https://sagame6699.com/gameplay/?gametype=sexygame"
						>
							<img src="https://sagame6699.com/wp-content/uploads/2020/10/b1-min-1.jpg" />
						</a>

						<a
							class="tt_l mb-5 tt_img_fixed2"
							target="_blank"
							href="https://sagame6699.com/gameplaypage/"
						>
							<img src="https://sagame6699.com/wp-content/uploads/2020/12/รวม-1.png" />
						</a>

						<a
							class="tt_l mb-5 tt_img_fixed2"
							target="_blank"
							href="https://sagame6699.com/gameplay?gametype=sbo"
						>
							<img src="https://sagame6699.com/wp-content/uploads/2020/12/sbo-1.png" />
						</a>

						<a
							class="tt_l mb-5 tt_img_fixed2"
							target="_blank"
							href="https://sagame6699.com/gameplay/?gametype=pretty2"
						>
							<img src="https://sagame6699.com/wp-content/uploads/2020/10/pt2.png" />
						</a>

						<a
							class="tt_l mb-5 tt_img_fixed2"
							target="_blank"
							href="https://sagame6699.com/gameplay?gametype=wmcasino"
						>
							<img src="https://sagame6699.com/wp-content/uploads/2020/10/WMCASINO.png" />
						</a>
					</div>
					<div id="topbar" class="fxx">
						<a class="tt_img_fixed" target="_blank" href="">
							<img src="assets/images/line.jpg" />
							<span class="tt_tx_line"> LINE : @GtsGold168</span>
						</a>
						<a class="tt_l mt-10 tt_img_fixed" target="_blank" href="">
							<img src="" />
						</a>
					</div>
					{/* <!-- Hero Area Start --> */}
					<div className="hero-area">
						<br></br>
						<br></br>

						<div
							id="carouselExampleIndicators"
							class="carousel slide"
							data-ride="carousel"
						>
							<ol class="carousel-indicators">
								<li
									data-target="#carouselExampleIndicators"
									data-slide-to="0"
									class="active"
								></li>
								<li
									data-target="#carouselExampleIndicators"
									data-slide-to="1"
								></li>
								<li
									data-target="#carouselExampleIndicators"
									data-slide-to="2"
								></li>
							</ol>
							<div class="carousel-inner">
								<div class="carousel-item active">
									<img
										src="assets/images/pokdeng.png"
										class="d-block w-100"
										alt="..."
									/>
								</div>
								<div class="carousel-item">
									<img
										src="assets/images/UFAslot.jpg.png"
										class="d-block w-100"
										alt="..."
									/>
								</div>
								<div class="carousel-item">
									<img
										src="assets/images/Sexy-Bacarrat.png"
										class="d-block w-100"
										alt="..."
									/>
								</div>
							</div>
							<a
								class="carousel-control-prev"
								href="#carouselExampleIndicators"
								role="button"
								data-slide="prev"
							>
								<span
									class="carousel-control-prev-icon"
									aria-hidden="true"
								></span>
								<span class="sr-only">Previous</span>
							</a>
							<a
								class="carousel-control-next"
								href="#carouselExampleIndicators"
								role="button"
								data-slide="next"
							>
								<span
									class="carousel-control-next-icon"
									aria-hidden="true"
								></span>
								<span class="sr-only">Next</span>
							</a>
						</div>
						{/* <Swiper
						spaceBetween={50}
						slidesPerView={1}
						onSlideChange={() => console.log("slide change")}
						onSwiper={(swiper) => console.log(swiper)}
					>
						<SwiperSlide>
							<img
								src="assets/images/GDG.png"
								style={{
									maxwidth: "initial",
									width: "100%",
								}}
							></img>
						</SwiperSlide>
						<SwiperSlide>
							<img
								style={{
									maxwidth: "initial",
									width: "100%",
								}}
								src="assets/images/UFAslot.jpg.png"
							></img>
						</SwiperSlide>
						<SwiperSlide>
							<img
								style={{
									maxwidth: "initial",
									width: "100%",
								}}
								src="assets/images/virtual-sports.jpg.png"
							></img>
						</SwiperSlide>
					</Swiper> */}

						<div className="row">
							<div className="col-12"></div>
						</div>
						<div className="row">
							{/* <div className="col-md-4">
							<div className="image">
								<div className="container">
									<br></br>
									<img
										width="400"
										height="250"
										src="assets/images/Ebet.png"
									></img>
								</div>
							</div>
						</div> */}

							<div className="col-md-12  ">
								<div style={{ paddingTop: "5%" }}>
									<div className="container ">
										<center>
											<b
												className=" text-neno-titel"
												style={{ fontSize: "22px" }}
											>
												บาคาร่า รูเล็ต ไพ่เสือมังกร สล็อต(Slot) เกมส์ยิงปลา
												แทงบอล
											</b>
										</center>
										<br></br>
										&nbsp;&nbsp;
										<b style={{ color: "#F5D404 " }}>
											<u>GtsGold168</u>
										</b>
										&nbsp;
										<b>
											<u>เป็นเว็บพนันที่ดีที่สุดในประเทศไทย</u>
										</b>{" "}
										เป็นเว็บไซต์&nbsp;
										<b>
											<u>คาสิโนครบวงจร</u>
										</b>{" "}
										บาคาร่า ไพ่เสือมังกร สล็อต(Slot) เกมส์ยิงปลา แทงบอล
										ลอตเตอรี่ หวย จากค่าย UFA และ รวมค่ายคาสิโนชั้นนำของโลก
										เข้ามาไว้ให้เล่นกันมากมาย ได้แก่ UFA, SA , SASEXY , JOKER ,
										PG , WM , PRETTY , AG , AMB , DG Casino
										และอีกมากมายอยากเล่นอะไร ยิงปลา บาคาร่า แทงบอล
										จบที่เว็บเดียว การสมัครสมาชิกก็ง่ายสะดวก
										รวดเร็วด้วยทีมงานที่มีประสบการณ์มากมาย
										<b>
											<u>ฝากถอนรวดเร็วทันใจไม่มีขั้นต่ำ</u>
										</b>{" "}
										ได้เงินไวรวยเร็ว ถือว่าเป็นอีกหนึ่งช่องทางในการหารายได้ง่ายๆ
										ในช่วงเวลาว่างงาน สมัครได้ที่
										<span class="badge badge-pill badge-success">
											{" "}
											Line: @GtsGold168
										</span>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<div style={{ paddingTop: "5%" }}>
									<div className="container">
										<center>
											<b
												className="text-neno-titel"
												style={{ fontSize: "22px" }}
											>
												สิ่งที่ได้รับจาก GtsGold168
											</b>
										</center>
										&nbsp;&nbsp;ทุกท่านได้รับผลตอบแทนจากการแนะนำเพื่อนให้มาสมัครกับทางเรา
										0.02% GtsGold168
										จะพาทุกๆท่านพบกับประสบการณ์หาเงินง่ายๆไม่ต้องออกแรงกับ
										คาสิโนออนไลน์จากค่ายชั้นนำหลายค่าย หรือพักผ่อนกับเกมส์ สล๊อต
										ยิงปลา{" "}
										<b>
											<u>ที่เพียงแค่เล่นเกมส์ก็ได้เงิน</u>
										</b>
										ท่านสามารถเข้ามาเล่นได้ตลอดเวลา การฝากถอนก็ง่ายนิดเดียว
										เพียงแค่แอดไลน์{" "}
										<span class="badge badge-pill badge-success">
											{" "}
											Line: @GtsGold168
										</span>
									</div>
								</div>
							</div>
							{/* <div className="col-md-4">
							<div>
								<img height="250" width="400" src="assets/images/GDG.png"></img>
							</div>
						</div> */}
						</div>
						<br></br>
						<br></br>
						<div className="row">
							<div className="col-5">
								{" "}
								<div style={{ paddingLeft: "10%" }}>
									<center>
										<b className="text-neno-titel" style={{ fontSize: "22px" }}>
											วิธีการสมัคร
										</b>
									</center>
									<ul>
										<li>1) แอดไลน์ @GtsGold168 </li>
										<li>2) ใส่ข้อมูลชื่อสกุล</li>
										<li>
											3)
											เลขบัญชีธนาคารที่ลูกค้าใช้ในการโอนและรับเงินจากทางเว็บไซต์
										</li>
										<li>4) เบอร์โทรศัพท์</li>
										<li>5) ID: Line ของลูกค้า</li>
										<li>6) User ผู้แนะนำหรือช่องที่เข้าถึง(ถ้ามี)</li>
										<li>7) เมื่อลูกค้ารับ User แล้วสามารถเข้าสู่ระบบได้เลย</li>
										<li>
											8) ต่อมาลูกค้าก็จะพบกับประสบการณ์การหาเงินใช้แบบง่ายๆ
											ได้เร็ว
										</li>
									</ul>
								</div>
							</div>
							<div className="col-7">
								<img
									height="400"
									width="100%"
									src="assets/images/home/messageImage_1610447250735.jpg"
								></img>
							</div>
						</div>
						<img
							height="300"
							width="100%"
							src="assets/images/home/โฆษณา2.png"
						></img>

						<div className="container">
							<b style={{ fontSize: "18px" }}></b>
						</div>
						<div className="container">
							<div className="cards-list">
								<div className="card 1">
									<div className="card_image">
										{" "}
										<img src="assets/images/รูปคาซิโนหมวดเกม_๒๑๐๑๑๔_0.jpg" />{" "}
									</div>
								</div>
								<div className="card 1">
									<div className="card_image">
										{" "}
										<img src="assets/images/รูปคาซิโนหมวดเกม_๒๑๐๑๑๔_1.jpg" />{" "}
									</div>
								</div>
								<div className="card 1">
									<div className="card_image">
										{" "}
										<img src="assets/images/รูปคาซิโนหมวดเกม_๒๑๐๑๑๔_2.jpg" />{" "}
									</div>
								</div>
								<div className="card 1">
									<div className="card_image">
										{" "}
										<img src="assets/images/รูปคาซิโนหมวดเกม_๒๑๐๑๑๔_3.jpg" />{" "}
									</div>
								</div>
								<div className="card 1">
									<div className="card_image">
										{" "}
										<img src="assets/images/virtual-sports.jpg.png" />{" "}
									</div>
								</div>
								<div className="card 1">
									<div className="card_image">
										{" "}
										<img src="assets/images/รูปคาซิโนหมวดเกม_๒๑๐๑๑๔_5.jpg" />{" "}
									</div>
								</div>
								<div className="card 1">
									<div className="card_image">
										{" "}
										<img src="assets/images/Spade-Gaming.jpg.png" />{" "}
									</div>
								</div>
								<div className="card 1">
									<div className="card_image">
										{" "}
										<img src="assets/images/Sexy-Bacarrat.png" />{" "}
									</div>
								</div>
								<div className="card 1">
									<div className="card_image">
										{" "}
										<img src="assets/images/SV388.jpg.png" />{" "}
									</div>
								</div>
								<div className="card 1">
									<div className="card_image">
										{" "}
										<img src="assets/images/Ebet.png" />{" "}
									</div>
								</div>
							</div>
						</div>
					</div>

					<footer className="pb-5 footer">
						<div className="container">
							<div className="row text-light pl-5">
								<div className="col-md-3">
									<img
										src="assets/images/home/messageImage_1610447250735.jpg"
										className="img-fluid mb-3 lazyloaded"
										alt="logo ufadeal"
										data-ll-status="loaded"
									/>

									<h3>
										<strong className="text-neno-titel">เกี่ยวกับเรา</strong>
									</h3>
									<p className="text-white-50 small">
										GTS168.COM Partner of GTS168 เว็บพนันออนไลน์ แทงบอลออนไลน์
										คาสิโนออนไลน์ ครบครัน ที่มาพร้อมกับ ระบบฝากถอนAUTO
										ทำรายการภายใน 10 วินาที รองรับ Smartphone ทุกระบบปฎิบัติการ{" "}
									</p>
									<p className="small text-white-50">
										GTSCASINO GTSSLOT SA Gaming Joker Gaming REDTIGER PGSLOT
										King Maker{" "}
									</p>
								</div>
								<div className="col-md-3 col-12" style={{ paddingTop: "5%" }}>
									<h3>
										<strong className="text-neno-titel">CASINO</strong>
									</h3>
									<ul id="menu-header-menu-2" className="nav flex-column">
										<li className="nav-item py-0">
											<a href="">หน้าแรก</a>
										</li>
										<li className="nav-item py-0">
											<a href="">คาสิโนออนไลน์</a>
										</li>
										<li className="nav-item py-0">
											<a href="">แทงบอลออนไลน์</a>
										</li>
										<li className="nav-item py-0">
											<a href="">Slot ( สล็อตออนไลน์ )</a>
										</li>
										<li className="nav-item py-0">
											<a href="">เกมยิงปลา</a>
										</li>
										<li className="nav-item py-0">
											<a href="">แทงไฮโล</a>
										</li>
										<li className="nav-item py-0">
											<a href="">ผังเว็บไซต์</a>
										</li>
									</ul>{" "}
								</div>

								<div className="col-md-3 col-12" style={{ paddingTop: "5%" }}>
									<h3>
										<strong className="text-neno-titel">BLOG</strong>
									</h3>
									<ul id="menu-header-menu-3" className="nav flex-column">
										<li className="nav-item py-0">
											<a href="">หน้าแรก</a>
										</li>
										<li className="nav-item py-0">
											<a href="">คาสิโนออนไลน์</a>
										</li>
										<li className="nav-item py-0">
											<a href="">แทงบอลออนไลน์</a>
										</li>
										<li className="nav-item py-0">
											<a href="">Slot ( สล็อตออนไลน์ )</a>
										</li>
										<li className="nav-item py-0">
											<a href="">เกมยิงปลา</a>
										</li>
										<li className="nav-item py-0">
											<a href="">แทงไฮโล</a>
										</li>
										<li className="nav-item py-0">
											<a href="">ผังเว็บไซต์</a>
										</li>
									</ul>{" "}
								</div>
								<div className="col-md-3 col-12">
									<div className="container">
										<div style={{ paddingRight: "10%", paddingTop: "5%" }}>
											<img src="https://ufadeal.com/wp-content/themes/deal-theme/assets/ic-bank-logo.png"></img>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="-tags-wrapper pt-2">
							<div className="container">
								<div className="row x-footer-seo">
									<div className="col-12 -tags text-center">
										<a href="" className="btn btn-sm">
											GTSSLOT
										</a>
										<a href="" className="btn btn-sm">
											เกมสล็อต
										</a>
										<a href="" className="btn btn-sm">
											เกมยิงปลา
										</a>
										<a href="" className="btn btn-sm">
											แทงบอลออนไลน์
										</a>
										<a href="" className="btn btn-sm">
											บาคาร่าขั้นต่ำ10บาท
										</a>
										<a href="/" className="btn btn-sm">
											GTS168
										</a>
										<br></br>
										<a href="/" className="btn btn-sm">
											Official
										</a>
										<a href="/" className="btn btn-sm">
											Partner
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="text-center mt-3 -lower-wrapper">
							<p className="mb-0" style={{ color: "white" }}>
								Copyright © 2020 GTS168. All Rights Reserved.
							</p>
						</div>
					</footer>
					
					<script src="assets/js/jquery.js"></script>

					<script src="assets/js/popper.min.js"></script>

					<script src="assets/js/bootstrap.min.js"></script>

					<script src="assets/js/plugin.js"></script>

					<script src="assets/js/TweenMax.js"></script>
					<script src="assets/js/mousemoveparallax.js"></script>

					<script src="assets/js/main.js"></script>
				</div>
				
			</div>
			<div class="m-contact">
						<div class="o-contact">
							<a href="" target="_blank">
								<img
									class="contact-icon lazyloaded"
									alt="login ufadeal"
									width="32px"
									height="32px"
									src="https://ufadeal.com/wp-content/themes/deal-theme/assets/login.png"
									data-ll-status="loaded"
								/>
								<noscript>
									<img
										class="contact-icon"
										alt="login ufadeal"
										width="32px"
										height="32px"
										src="https://ufadeal.com/wp-content/themes/deal-theme/assets/login.png"
									/>
								</noscript>
								<span class="text-contact contact-info">เข้าสู่ระบบ</span>
							</a>
						</div>
						<div class="o-contact">
							<a href="" target="_blank">
								<img
									class="contact-icon lazyloaded"
									alt="follower ufadeal"
									width="32px"
									height="32px"
									src="https://ufadeal.com/wp-content/themes/deal-theme/assets/follower.png"
									data-ll-status="loaded"
								/>
								<noscript>
									<img
										class="contact-icon"
										alt="follower ufadeal"
										width="32px"
										height="32px"
										src="https://ufadeal.com/wp-content/themes/deal-theme/assets/follower.png"
									/>
								</noscript>
								<span class="text-contact contact-info">สมัครสมาชิก</span>
							</a>
						</div>
						<div class="o-contact">
							<a href="" target="_blank">
								<img
									class="contact-icon lazyloaded"
									alt="coin ufadeal"
									width="32px"
									height="32px"
									src="https://ufadeal.com/wp-content/themes/deal-theme/assets/coin.png"
									data-ll-status="loaded"
								/>
								<noscript>
									<img
										class="contact-icon"
										alt="coin ufadeal"
										width="32px"
										height="32px"
										src="https://ufadeal.com/wp-content/themes/deal-theme/assets/coin.png"
									/>
								</noscript>
								<span class="text-contact contact-info">ฝาก-ถอน</span>
							</a>
						</div>
						<div class="o-contact">
							<a href="" target="_blank">
								<img
									class="contact-icon lazyloaded"
									alt="headphone ufadeal"
									width="32px"
									height="32px"
									src="https://ufadeal.com/wp-content/themes/deal-theme/assets/headphone.png"
									data-ll-status="loaded"
								/>
								<noscript>
									<img
										class="contact-icon"
										alt="headphone ufadeal"
										width="32px"
										height="32px"
										src="https://ufadeal.com/wp-content/themes/deal-theme/assets/headphone.png"
									/>
								</noscript>
								<span class="text-contact contact-info">สอบถาม</span>
							</a>
						</div>
					</div>
		</div>
	);
}
