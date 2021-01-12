import { NextSeo } from "next-seo";
import Head from "next/head";

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
      <body>
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
                        {/* <li>
                          <div className="cart-icon tm-dropdown">
                            <i className="fas fa-cart-arrow-down"></i>
                            <span className="cart-count">10</span>
                            <div className="tm-dropdown-menu">
                              <ul className="list">
                                <li className="list-item">
                                  <div className="close">
                                    <i className="fas fa-times"></i>
                                  </div>
                                  <ul className="number-list">
                                    <li>24</li>
                                    <li>25</li>
                                    <li>26</li>
                                    <li>27</li>
                                    <li>28</li>
                                  </ul>
                                </li>
                                <li className="list-item">
                                  <div className="close">
                                    <i className="fas fa-times"></i>
                                  </div>
                                  <ul className="number-list">
                                    <li>24</li>
                                    <li>25</li>
                                    <li>26</li>
                                    <li>27</li>
                                    <li>28</li>
                                  </ul>
                                </li>
                                <li className="list-item">
                                  <div className="close">
                                    <i className="fas fa-times"></i>
                                  </div>
                                  <ul className="number-list">
                                    <li>24</li>
                                    <li>25</li>
                                    <li>26</li>
                                    <li>27</li>
                                    <li>28</li>
                                  </ul>
                                </li>
                                <li className="list-item">
                                  <div className="close">
                                    <i className="fas fa-times"></i>
                                  </div>
                                  <ul className="number-list">
                                    <li>24</li>
                                    <li>25</li>
                                    <li>26</li>
                                    <li>27</li>
                                    <li>28</li>
                                  </ul>
                                </li>
                              </ul>
                              <a href="cart.html" className="link-btn">
                                Cart Page
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="notofication tm-dropdown">
                            <i className="fas fa-bell"></i>
                            <span className="count">11</span>
                            <div className="tm-dropdown-menu">
                              <ul className="list">
                                <li>
                                  <a href="#">
                                    <i className="fas fa-bell"></i>
                                    Invest Exchange
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-bell"></i>
                                    Invest Exchange
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-bell"></i>
                                    Invest Exchange
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-bell"></i>
                                    Invest Exchange
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-bell"></i>
                                    Invest Exchange
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="sign-in"
                            data-toggle="modal"
                            data-target="#login"
                          >
                            <i className="fas fa-user"></i> Sign In
                          </a>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Top Header Area End --> */}
          {/* <!--Main-Menu Area Start--> */}
          <div className="mainmenu-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="index.html">
                      <img src="assets/images/logo.png" alt="" />
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
                      <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link active dropdown-toggle"
                            href="#"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Home
                            <div className="mr-hover-effect"></div>
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="index.html">
                                {" "}
                                <i className="fa fa-angle-double-right"></i>Home
                                1
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="index2.html">
                                {" "}
                                <i className="fa fa-angle-double-right"></i>{" "}
                                Home 2
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="play.html">
                            Play
                            <div className="mr-hover-effect"></div>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="lottery.html">
                            lottery
                            <div className="mr-hover-effect"></div>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="tournaments.html">
                            tournaments
                            <div className="mr-hover-effect"></div>
                          </a>
                        </li>
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Pages
                            <div className="mr-hover-effect"></div>
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="about.html">
                                {" "}
                                <i className="fa fa-angle-double-right"></i>
                                About
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="affiliate.html"
                              >
                                {" "}
                                <i className="fa fa-angle-double-right"></i>
                                Affiliate
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="awards.html">
                                {" "}
                                <i className="fa fa-angle-double-right"></i>
                                Awards
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="bonus.html">
                                {" "}
                                <i className="fa fa-angle-double-right"></i>
                                Bonus
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="cart.html">
                                {" "}
                                <i className="fa fa-angle-double-right"></i>Cart
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="faq.html">
                                {" "}
                                <i className="fa fa-angle-double-right"></i>Faq
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="how-it-work.html"
                              >
                                {" "}
                                <i className="fa fa-angle-double-right"></i>How
                                It Work
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="terms-conditions.html"
                              >
                                {" "}
                                <i className="fa fa-angle-double-right"></i>
                                Terms & Condition
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="terms-conditions-details.html"
                              >
                                {" "}
                                <i className="fa fa-angle-double-right"></i>
                                Condition Details
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="404.html">
                                {" "}
                                <i className="fa fa-angle-double-right"></i>404
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="contact.html">
                            Contact
                            <div className="mr-hover-effect"></div>
                          </a>
                        </li>
                      </ul>
                      <a
                        href="#"
                        className="mybtn1"
                        data-toggle="modal"
                        data-target="#signin"
                      >
                        {" "}
                        Join us
                      </a>
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
        <div class="hero-area">
          <div class="container">
            <div class="row">
              <div class="col-lg-5 d-flex align-self-center">
                <div class="left-content">
                  <div class="content">
                    <h5 class="subtitle">New Crypto Game</h5>
                    <h1 class="title">PLay To WIN</h1>
                    <p class="text">
                      Play, Invest,Exchange and Join the Contest with high
                      rewards at Dooplo!
                    </p>
                    <div class="links">
                      <a href="#" class="mybtn1 link1">
                        Get Started Now!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-7">
                <div class="hero-img2 d-block d-md-none">
                  <img src="assets/images/heroarea.png" alt="" />
                </div>
                <div class="hero-img d-none d-md-block">
                  <img
                    class="img-fluid full-image"
                    src="assets/images/heroarea.png"
                    alt=""
                  />
                  <img
                    class="shape phone"
                    src="assets/images/h-shapes/phone.png"
                    alt=""
                  />
                  <img
                    class="shape man"
                    src="assets/images/h-shapes/man222.png"
                    alt=""
                  />
                  <img
                    class="shape ripple"
                    src="assets/images/h-shapes/ripple.png"
                    alt=""
                  />
                  <img
                    class="shape ripple2"
                    src="assets/images/h-shapes/ripple1.png"
                    alt=""
                  />
                  <img
                    class="shape bitcoin1"
                    src="assets/images/h-shapes/bitcoin1.png"
                    alt=""
                  />
                  <img
                    class="shape bitcoin2"
                    src="assets/images/h-shapes/bitcoin2.png"
                    alt=""
                  />
                  <img
                    class="shape shape-icon"
                    src="assets/images/h-shapes/shape.png"
                    alt=""
                  />
                  <img
                    class="shape award-bg"
                    src="assets/images/h-shapes/award/bg.png"
                    alt=""
                  />
                  <img
                    class="shape award"
                    src="assets/images/h-shapes/award/award.png"
                    alt=""
                  />
                  <img
                    class="shape gift-bg"
                    src="assets/images/h-shapes/giftbox/bg.png"
                    alt=""
                  />
                  <img
                    class="shape gift"
                    src="assets/images/h-shapes/giftbox/gift.png"
                    alt=""
                  />
                  <img
                    class="shape shield-bg"
                    src="assets/images/h-shapes/shield/bg.png"
                    alt=""
                  />
                  <img
                    class="shape shield"
                    src="assets/images/h-shapes/shield/shield.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Hero Area End --> */}
      </body>
    </>
  );
}
