import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

export default function TheHeader() {
    return (
        <>
            <header className="header">
            <div className="m-contact d-lg-none " style={{bottom:'unset'}}>
                    <div className="o-contact" style={{width:'50%'}}>
                        <a href="/login" >
                            <img
                                className="contact-icon lazyloaded m-0"
                                alt="login ufadeal"
                                width="100%"
                                // height="32px"
                                src="assets/images/billboard/register-line.png"
                                // data-ll-status="loaded"
                            />
                            {/* <noscript>
                                <img
                                    className="contact-icon"
                                    alt="login ufadeal"
                                    width="32px"
                                    height="32px"
                                    src="https://ufadeal.com/wp-content/themes/deal-theme/assets/login.png"
                                />
                            </noscript>
                            <span className="text-contact">เข้าสู่ระบบ</span> */}
                        </a>
                    </div>
                    <div className="o-contact" style={{width:'50%'}}>
                        <a href="/register">
                            <img
                                className="contact-icon lazyloaded m-0"
                                alt="follower ufadeal"
                                width="100%"
                                // height="32px"
                                src="assets/images/billboard/register-web.png"
                                // data-ll-status="loaded"
                            />
                            {/* <noscript>
                                <img
                                    className="contact-icon"
                                    alt="follower ufadeal"
                                    width="32px"
                                    height="32px"
                                    src="https://ufadeal.com/wp-content/themes/deal-theme/assets/follower.png"
                                />
                            </noscript> */}
                            {/* <span className="text-contact contact-info">สมัครสมาชิก</span> */}
                        </a>
                    </div>
                    <div className="o-contact" style={{width:'100%'}}>
                        <a href="https://lin.ee/KE4VK7d">
                            <img
                                className="contact-icon lazyloaded m-0"
                                // alt="coin ufadeal"
                                width="100%"
                                // height="32px"
                                src="assets/images/billboard/bank.png"
                                // data-ll-status="loaded"
                            />
                            {/* <noscript>
                                <img
                                    className="contact-icon"
                                    alt="coin ufadeal"
                                    width="32px"
                                    height="32px"
                                    src="https://ufadeal.com/wp-content/themes/deal-theme/assets/coin.png"
                                />
                            </noscript> */}
                            {/* <span className="text-contact contact-info">ฝาก-ถอน</span> */}
                        </a>
                    </div>
                </div>
                <Navbar bg="black" expand="lg" className="">
                    <div className="container">
                        <Navbar.Brand href="#home">
                            <img
                                src="assets/images/logoicon1.png"
                                width="100"
                                height="100"
                                alt=""
                                style={{ position: "relative", objectFit: "contain" }}
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link href="/home">หน้าแรก</Nav.Link>
                                <Nav.Link href="/bacara">บาคาร่า</Nav.Link>
                                <Nav.Link href="/shootfish">ยิงปลา</Nav.Link>
                                <Nav.Link href="/slot">สล็อต</Nav.Link>
                                <Nav.Link href="/sport">แทงบอล</Nav.Link>
                                <Nav.Link href="/login">เข้าสู่เกมส์</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </header>
        </>
    );
}
