
export default function TheMobileMenu() {
    return (
        <>
            <div className="m-contact">
                <div className="o-contact" onClick={()=> {
                document.getElementById("basic-navbar-nav").classList.toggle("show");
                document.getElementById("m-contact").classList.toggle("d-none");
                document.getElementById("NavbarBrand").classList.toggle("d-none");
                document.getElementById("basic-navbar").classList.toggle("d-none");
                }}>
                    <a href={() => {}} >
                        <img
                            className="contact-icon lazyloaded"
                            alt="login ufadeal"
                            width="24px"
                            height="24px"
                            src="https://icon-library.com/images/hamburger-menu-icon-png/hamburger-menu-icon-png-29.jpg"
                            data-ll-status="loaded"
                        />
                        <noscript>
                            <img
                                className="contact-icon"
                                alt="login ufadeal"
                                width="24px"
                                height="24px"
                                src="https://icon-library.com/images/hamburger-menu-icon-png/hamburger-menu-icon-png-29.jpg"
                            />
                        </noscript>
                        <span className="text-contact">คาสิโน(เมนู)</span>
                    </a>
                </div>
                <div className="o-contact">
                    <a href="/login" >
                        <img
                            className="contact-icon lazyloaded"
                            alt="login ufadeal"
                            width="24px"
                            height="24px"
                            src="https://ufadeal.com/wp-content/themes/deal-theme/assets/login.png"
                            data-ll-status="loaded"
                        />
                        <noscript>
                            <img
                                className="contact-icon"
                                alt="login ufadeal"
                                width="24px"
                                height="24px"
                                src="https://ufadeal.com/wp-content/themes/deal-theme/assets/login.png"
                            />
                        </noscript>
                        <span className="text-contact">เข้าสู่ระบบ</span>
                    </a>
                </div>
                <div className="o-contact">
                    <a href="/register">
                        <img
                            className="contact-icon lazyloaded"
                            alt="follower ufadeal"
                            width="24px"
                            height="24px"
                            src="https://ufadeal.com/wp-content/themes/deal-theme/assets/follower.png"
                            data-ll-status="loaded"
                        />
                        <noscript>
                            <img
                                className="contact-icon"
                                alt="follower ufadeal"
                                width="24px"
                                height="24px"
                                src="https://ufadeal.com/wp-content/themes/deal-theme/assets/follower.png"
                            />
                        </noscript>
                        <span className="text-contact contact-info">สมัครทาง line</span>
                    </a>
                </div>
                <div className="o-contact">
                    <a href="https://lin.ee/KE4VK7d">
                        <img
                            className="contact-icon lazyloaded"
                            alt="coin ufadeal"
                            width="24px"
                            height="24px"
                            src="https://ufadeal.com/wp-content/themes/deal-theme/assets/coin.png"
                            data-ll-status="loaded"
                        />
                        <noscript>
                            <img
                                className="contact-icon"
                                alt="coin ufadeal"
                                width="24px"
                                height="24px"
                                src="https://ufadeal.com/wp-content/themes/deal-theme/assets/coin.png"
                            />
                        </noscript>
                        <span className="text-contact contact-info">ฝากถอน</span>
                    </a>
                </div>
                <div className="o-contact">
                    <a href="https://lin.ee/KE4VK7d" target="_blank">
                        <img
                            className="contact-icon lazyloaded"
                            alt="headphone ufadeal"
                            width="24px"
                            height="24px"
                            src="https://ufadeal.com/wp-content/themes/deal-theme/assets/headphone.png"
                            data-ll-status="loaded"
                        />
                        <noscript>
                            <img
                                className="contact-icon"
                                alt="headphone ufadeal"
                                width="24px"
                                height="24px"
                                src="https://ufadeal.com/wp-content/themes/deal-theme/assets/headphone.png"
                            />
                        </noscript>
                        <span className="text-contact contact-info">ติดต่อเจ้าหน้าที่</span>
                    </a>
                </div>
            </div>
        </>
    )
}