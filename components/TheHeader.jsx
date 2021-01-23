import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

export default function TheHeader() {
    return (
        <>
            <header className="header">
                <div className="m-contact d-lg-none " id="m-contact" style={{bottom:'unset'}}>
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
                           
                        </a>
                    </div>
                </div>
            </header>
        </>
    );
}
