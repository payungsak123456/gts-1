import { NextSeo } from "next-seo";
import Head from "next/head";
import { Swiper, SwiperSlide } from "swiper/react";
export default function Home() {
	return (
		<>
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
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
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

				{/* <!-- Hero Area Start --> */}
				<div className="hero-area">
					<Swiper
						spaceBetween={50}
						slidesPerView={1}
						onSlideChange={() => console.log("slide change")}
						onSwiper={(swiper) => console.log(swiper)}
					>
						<SwiperSlide>
							<img
								src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/91cb3490-bd89-448c-9f9c-251580f3b506/d1xmrdi-9511f0ac-61f2-4730-96df-7336cfdcb6ab.jpg/v1/fill/w_1024,h_769,q_75,strp/casino_gano_by_rodrigozenteno_d1xmrdi-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD03NjkiLCJwYXRoIjoiXC9mXC85MWNiMzQ5MC1iZDg5LTQ0OGMtOWY5Yy0yNTE1ODBmM2I1MDZcL2QxeG1yZGktOTUxMWYwYWMtNjFmMi00NzMwLTk2ZGYtNzMzNmNmZGNiNmFiLmpwZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.5kr_WWXKuSkN8o7cCBj27dkVyQFD1I45vF84o5D_YE0"
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
								src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/879d8433-7188-412f-9a05-7ccf9f50f07f/dkxwj8-c93205d8-94cd-44e0-8e4b-49eb1409ebfd.jpg/v1/fill/w_1024,h_768,q_75,strp/poker_night_by_andyprower_dkxwj8-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD03NjgiLCJwYXRoIjoiXC9mXC84NzlkODQzMy03MTg4LTQxMmYtOWEwNS03Y2NmOWY1MGYwN2ZcL2RreHdqOC1jOTMyMDVkOC05NGNkLTQ0ZTAtOGU0Yi00OWViMTQwOWViZmQuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.cvaSmLktWlhgvWBp1IhMNHvPOeomOsrEd-QE0o7puxU"
							></img>
						</SwiperSlide>
						<SwiperSlide>
							<img
								style={{
									maxwidth: "initial",
									width: "100%",
								}}
								src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/66ce6a09-200e-40c9-a87c-40a3f39876d5/d20yavo-a014cc6c-ea3b-406e-ad85-f5dd4854b86c.jpg/v1/fill/w_1032,h_774,q_70,strp/love_just_like_gamble_by_foreverkatz_d20yavo-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0yNDQ4IiwicGF0aCI6IlwvZlwvNjZjZTZhMDktMjAwZS00MGM5LWE4N2MtNDBhM2YzOTg3NmQ1XC9kMjB5YXZvLWEwMTRjYzZjLWVhM2ItNDA2ZS1hZDg1LWY1ZGQ0ODU0Yjg2Yy5qcGciLCJ3aWR0aCI6Ijw9MzI2NCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.-Ry3hXs6fIRrz7Nyyzt8NfPrsAlLU7Ru5Gjo7ZxP5jA"
							></img>
						</SwiperSlide>
					</Swiper>
					<div className="cards-list">
						<div className="card 1">
							<div className="card_image">
								{" "}
								<img src="https://www.casinofevers.com/wp-content/uploads/2019/05/casino-fever-sexy-baccarat-300x169.png" />{" "}
							</div>
						</div>
						<div className="card 1">
							<div className="card_image">
								{" "}
								<img src="https://www.casinofevers.com/wp-content/uploads/2019/05/casino-fever-baccarat-300x169.png" />{" "}
							</div>
						</div>
						<div className="card 1">
							<div className="card_image">
								{" "}
								<img src="https://www.casinofevers.com/wp-content/uploads/2019/05/casino-fever-roulette-300x169.png" />{" "}
							</div>
						</div>
						<div className="card 1">
							<div className="card_image">
								{" "}
								<img src="https://www.casinofevers.com/wp-content/uploads/2019/05/casino-fever-dragon-tiger-300x169.png" />{" "}
							</div>
						</div>
						<div className="card 1">
							<div className="card_image">
								{" "}
								<img src="https://www.casinofevers.com/wp-content/uploads/2019/05/casino-fever-bull-fight-300x169.png" />{" "}
							</div>
						</div>
						<div className="card 1">
							<div className="card_image">
								{" "}
								<img src="https://www.casinofevers.com/wp-content/uploads/2019/05/casino-fever-sic-bo-300x169.png" />{" "}
							</div>
						</div>
						<div className="card 1">
							<div className="card_image">
								{" "}
								<img src="https://www.casinofevers.com/wp-content/uploads/2019/05/casino-fever-fantan-300x169.png" />{" "}
							</div>
						</div>
						<div className="card 1">
							<div className="card_image">
								{" "}
								<img src="https://www.casinofevers.com/wp-content/uploads/2019/05/casino-fever-fish-hunter-300x169.png" />{" "}
							</div>
						</div>
						<div className="card 1">
							<div className="card_image">
								{" "}
								<img src="https://www.casinofevers.com/wp-content/uploads/2019/05/casino-fever-cock-fight-300x169.png" />{" "}
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<img src="assets/images/home/โฆษณา2.png"></img>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6">
							<div className="image">
								<img
									width="500"
									height="300"
									src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9a55e796-3c80-4373-921c-3a13b52eccf2/d32m78a-f7ad0f2f-b8ea-4a9a-8ff8-329a4f2e1557.jpg/v1/fill/w_898,h_889,q_70,strp/come_play_with_me_by_gilang2007_d32m78a-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD04OTEiLCJwYXRoIjoiXC9mXC85YTU1ZTc5Ni0zYzgwLTQzNzMtOTIxYy0zYTEzYjUyZWNjZjJcL2QzMm03OGEtZjdhZDBmMmYtYjhlYS00YTlhLThmZjgtMzI5YTRmMmUxNTU3LmpwZyIsIndpZHRoIjoiPD05MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.GmBcB8Q3SGU3JnW3t4T_qj4zsShk64CIQKjxhrvGmMs"
								></img>
							</div>
						</div>

						<div className="col-md-6  ">
							<div style={{ paddingTop: "5%" }}>
								<div className="container ">
									<center>
										<b
											className=" text-neno-titel"
											style={{ fontSize: "26px" }}
										>
											Agent GTS168 จะได้รับอะไรบ้าง ?
										</b>
									</center>
									<br></br>
									<ul>
										<ol>
											<b style={{ color: "pink" }}>*</b> &nbsp; &nbsp;
											คืนยอดเสียให้กับคุณลูกค้าสูงสุดถึง{" "}
											<b style={{ color: "green" }}>90%</b>
										</ol>

										<ol>
											<b style={{ color: "pink" }}>*</b> &nbsp; &nbsp;
											ไม่ต้องมีวงเงินขั้นต่ำ หรือ
											เงินวางเดิมพันในการสมัครเอเย่นต์ เหมือนกับที่อื่นๆ และ
											ไม่ต้องสะสมยอด
										</ol>

										<ol>
											<b style={{ color: "pink" }}>*</b> &nbsp; &nbsp;
											ลูกค้าของคุณ สามารถเดิมพันกันเราได้อย่างครบวงจร
											ไม่ว่าจะเป็น แทงบอล บาคาร่า สล๊อต เกม E-Sport
											โดยสมัครเพียงครั้งเดียว ใช้ได้ตลอด
										</ol>

										<ol>
											<b style={{ color: "pink" }}>*</b> &nbsp; &nbsp;
											คุณจะได้รับระบบจัดการเอเยนต์
											ตรวจสอบลูกค้าของคุณได้ทั้งหมดเสมือนเป็นเจ้าของ UFA
										</ol>

										<ol>
											<b style={{ color: "pink" }}>*</b> &nbsp; &nbsp;
											มีทีมงานมืออาชีพ ที่จะคอยให้คำปรึกษาตลอด 24 ชม.
										</ol>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6">
							<div style={{ paddingTop: "5%" }}>
								<div className="container">
									<center>
										<b className="text-neno-titel" style={{ fontSize: "26px" }}>
											เงื่อนไขในการสมัครเอเย่นต์ GTS168
										</b>
									</center>
									<ul>
										<ol>
											<b style={{ color: "pink" }}>*</b> &nbsp; &nbsp;
											ตัดยอดเป็นรายสัปดาห์ จ่ายตามยอดเสียทั้งหมด ของลูกค้าของคุณ
										</ol>

										<ol>
											<b style={{ color: "pink" }}>*</b> &nbsp; &nbsp;
											ท่านจะได้ถือหุ้นกับเรา และ จะแบ่งเป็น แทงบอล ได้รับสูงสุด
											80% / คาสิโน ได้รับสูงสุด 75%
										</ol>

										<ol>
											<b style={{ color: "pink" }}>*</b> &nbsp; &nbsp;
											บริษัทขอสงวนลิขสิทธิ์ ในการเปลี่ยนแปลงข้อมูล
											โดยจะต้องมีการแจ้งให้ทางบริษัททราบล่วงหน้าอย่างน้อย 30 วัน
										</ol>

										<ol>
											<b style={{ color: "pink" }}>*</b> &nbsp; &nbsp;
											กรณีที่เอเยนต์ทำผิดกฎของเงื่อนไขที่ได้กำหนดไว้ หรือ
											พบการทุจริตในการดำเนินการใด ๆ
											ทางเราจะขอดำเนินการปิดยูสเซอร์ทันที
											โดยจะไม่มีการแจ้งล่วงหน้า
										</ol>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<img
								height="300"
								width="500"
								src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dd5f6bed-121a-44c5-940e-9c066ba39709/d1nl2iq-b930be5b-cf88-4f43-a93a-6e1f773ecb69.jpg/v1/fill/w_600,h_400,q_75,strp/slots_by_oh_la_de_da_d1nl2iq-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD00MDAiLCJwYXRoIjoiXC9mXC9kZDVmNmJlZC0xMjFhLTQ0YzUtOTQwZS05YzA2NmJhMzk3MDlcL2QxbmwyaXEtYjkzMGJlNWItY2Y4OC00ZjQzLWE5M2EtNmUxZjc3M2VjYjY5LmpwZyIsIndpZHRoIjoiPD02MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.3rZMJRiw59g-7cTLAZjBPHELJMe01rRdcLho9kGPShw"
							></img>
						</div>
					</div>
					<br></br>
					<br></br>

					<center>
						<b className="text-neno-titel" style={{ fontSize: "26px" }}>
							วิธีการคิดเงินของ GTS168
						</b>
					</center>
					<div
						style={{
							paddingLeft: "10%",
							paddingRight: "10%",
							paddingTop: "5%",
						}}
					>
						<img
							height="400"
							width="100%"
							src="assets/images/home/messageImage_1610447250735.jpg"
						></img>
					</div>
					<div className="container">
						<b style={{ fontSize: "18px" }}>
							วิธีการคิดเงินสำหรับเอเย่นต์ นั้น ยิ่งคุณหาลูกค้าได้มากเท่าใด
							คูณยิ่งจะได้มากเท่านั้น ยอดการสมัครไม่มีจำกัดการทำยอด
							หลายๆคนคงจะเคยเจอเงื่อนไขต่างๆ หรือ จะจำกัดยอดการสมัคร
							มีข้อจำกัดอื่นๆมากมาย แต่เรานั้น จะต่างกับที่อื่นๆ
							เราให้คุณได้มากกว่าที่อื่น เพียงแค่คุณมีความขยัน และ
							มอบความสนุกส่างต่อกับคนอื่นๆ และ
							วันนี้เราก็จะมาบอกวิธีการคิดเงินในฉลับเอเย่นต์
							ให้คุณความคุ้มค้าที่เราจะมอบให้กับคุณ เราคืนยอดเสียให้ถึง 80%
							สำหรับลูกค้าที่แทงบอล และ 75% สำหรับลูกค้าที่เล่นคาสิโน
							เราจะคิดจากยอดเสียของผู้สมัคร ตัวอย่างเช่น ท่านลูกค้าแทงบอลเสีย
							1000 บาท เอเย่นต์ก็จะได้รับเงินไปทันที 800 บาท
							ยิ่งถ้าหากมีผู้เข้ามาสมัคร และ ทำการเปิดบิลสูง
							ก็จะได้รับยอดสูงเช่นกัน และ หากเอเย่นต์ที่มีฐานลูกค้าเยอะอยู่แล้ว
							นั้นก็สามารถรับเงินได้อย่างง่ายดายเลยทีเดียว
							จะเรียกว่านั่งนับเงินรอความรวยกันไปเลย
						</b>
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
									GTSCASINO GTSSLOT SA Gaming Joker Gaming REDTIGER PGSLOT King
									Maker{" "}
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
				<script src="assets/js/jquery.js"></script>

				<script src="assets/js/popper.min.js"></script>

				<script src="assets/js/bootstrap.min.js"></script>

				<script src="assets/js/plugin.js"></script>

				<script src="assets/js/TweenMax.js"></script>
				<script src="assets/js/mousemoveparallax.js"></script>

				<script src="assets/js/main.js"></script>
			</div>
		</>
	);
}
