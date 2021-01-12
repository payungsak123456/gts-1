import Head from "next/head";

export default function FourOhFour() {
  return (
    <>
      <Head>
        <title>GTS - GOLD 168 ERROR 404</title>
        {/* <!-- favicon --> */}
        <link
          rel="shortcut icon"
          href="assets/images/favicon.png"
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
      <div class="preloader" id="preloader">
        <div class="loader loader-1">
          <div class="loader-outter"></div>
          <div class="loader-inner"></div>
        </div>
      </div>
      {/* <!-- preloader area end --> */}

      {/* <!-- 404 Area Start --> */}
      <section class="four-zero-four">
        <img class="bg-img" src="assets/images/404-bg.png" alt="" />
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="content">
                <img src="assets/images/404.png" alt="" />
                <div class="inner-content">
                  <h4 class="title">Oops, Something went wrong !</h4>
                  <a href="/" class="mybtn1">
                    <i class="fas fa-angle-double-left"></i> BACK TO HOME
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
