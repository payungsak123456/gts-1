
export default function TheHeader() {
    return (
        <>
            <header className="header">
                <div className="mainmenu-area ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <nav className="navbar navbar-expand-lg navbar-light">
                                    <a className="navbar-brand" href="/">
                                        <img
                                            src="assets/images/logoicon1.png"
                                            width="100"
                                            height="100"
                                            alt=""
                                            style={{ position: "relative", objectFit: "contain" }}
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
                                                <a className="nav-link " href="/home">
                                                    HOME
															<div className="mr-hover-effect"></div>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="/casino">
                                                    CASINO
															<div className="mr-hover-effect"></div>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="/sports">
                                                    SPORTS
															<div className="mr-hover-effect"></div>
                                                </a>
                                            </li>

                                            <li className="nav-item">
                                                <a className="nav-link" href="/slot">
                                                    SLOT
															<div className="mr-hover-effect"></div>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="/bacara">
                                                    BARCARA
															<div className="mr-hover-effect"></div>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="/login">
                                                    Login
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
