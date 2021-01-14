
export default function TheHeader() {
    return (
        <>
            <header className="header">
                <section className="top-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="content">
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
        </>
    );
}
