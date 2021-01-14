import Link from "next/link";
import Menu from "./Menu";

const style = {
  backgroundColor: "#4CAF50",
  border: "none",
  color: "white",
  padding: "10px 10px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "16px",
  margin: "4px 2px",
  cursor: "pointer",
};

const Header = () => (
  <>
    {/* <div className="preloader" id="preloader">
      <div className="loader loader-1">
        <div className="loader-outter"></div>
        <div className="loader-inner"></div>
      </div>
    </div> */}
    <header className="header">
      <section className="top-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="content">
                <div className="left-content">
                  <ul className="left-list"></ul>
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
                  {Menu.map(((e, index) => (
                    <li className="nav-item" key={index+=1}>
                      <a className="nav-link" href={e.url}>
                        {e.title}
                        <div className="mr-hover-effect"></div>
                      </a>
                    </li>
                  )))}
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  </>
);

export default Header;
