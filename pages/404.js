import Head from "next/head";

export default function FourOhFour() {
  return (
    <>
      <Head>
        <title>GTS - GOLD 168 ERROR 404</title>
        {/* <!-- favicon --> */}
        <link
          rel="shortcut icon"
          href="assets/images/favicon.ico"
          type="image/x-icon"
        />
        {/* <!-- bootstrap --/> */}
        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
        {/* <!-- Plugin css --/> */}
        <link rel="stylesheet" href="assets/css/plugin.css" />

        {/* <!-- stylesheet --/> */}
        <link rel="stylesheet" href="assets/css/style.css" />
        {/* <!-- responsive --> */}
        <link rel="stylesheet" href="assets/css/responsive.css" />
      </Head>
      {/* <!-- preloader area start --> */}
      <div className="preloader" id="preloader">
        <div className="loader loader-1">
          <div className="loader-outter"></div>
          <div className="loader-inner"></div>
        </div>
      </div>
      {/* <!-- preloader area end --> */}

      {/* <!-- 404 Area Start --> */}
      <section className="four-zero-four">
        <img className="bg-img" src="assets/images/404-bg.png" alt="" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="content">
                <img src="assets/images/404.png" alt="" />
                <div className="inner-content">
                  <h4 className="title">Oops, Something went wrong !</h4>
                  <a href="/" className="mybtn1">
                    <i className="fas fa-angle-double-left"></i> BACK TO HOME
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- 404 Area End --> */}

      {/* <!-- jquery --> */}
      <script src="assets/js/jquery.js"></script>
      {/* <!-- popper --> */}
      <script src="assets/js/popper.min.js"></script>
      {/* <!-- bootstrap --> */}
      <script src="assets/js/bootstrap.min.js"></script>
      {/* <!-- plugin js--> */}
      <script src="assets/js/plugin.js"></script>
      {/* <!-- main --> */}
      <script src="assets/js/main.js"></script>
    </>
  );
}
