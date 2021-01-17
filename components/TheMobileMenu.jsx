
export default function TheMobileMenu() {
    return (
        <>
            <div className="m-contact">
                <div className="o-contact">
                    <a href="/login" >
                        <img
                            className="contact-icon lazyloaded"
                            alt="login ufadeal"
                            width="32px"
                            height="32px"
                            src="https://ufadeal.com/wp-content/themes/deal-theme/assets/login.png"
                            data-ll-status="loaded"
                        />
                        <noscript>
                            <img
                                className="contact-icon"
                                alt="login ufadeal"
                                width="32px"
                                height="32px"
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
                            width="32px"
                            height="32px"
                            src="https://ufadeal.com/wp-content/themes/deal-theme/assets/follower.png"
                            data-ll-status="loaded"
                        />
                        <noscript>
                            <img
                                className="contact-icon"
                                alt="follower ufadeal"
                                width="32px"
                                height="32px"
                                src="https://ufadeal.com/wp-content/themes/deal-theme/assets/follower.png"
                            />
                        </noscript>
                        <span className="text-contact contact-info">สมัครสมาชิก</span>
                    </a>
                </div>
                <div className="o-contact">
                    <a href="https://lin.ee/KE4VK7d">
                        <img
                            className="contact-icon lazyloaded"
                            alt="coin ufadeal"
                            width="32px"
                            height="32px"
                            src="https://ufadeal.com/wp-content/themes/deal-theme/assets/coin.png"
                            data-ll-status="loaded"
                        />
                        <noscript>
                            <img
                                className="contact-icon"
                                alt="coin ufadeal"
                                width="32px"
                                height="32px"
                                src="https://ufadeal.com/wp-content/themes/deal-theme/assets/coin.png"
                            />
                        </noscript>
                        <span className="text-contact contact-info">ฝาก-ถอน</span>
                    </a>
                </div>
                <div className="o-contact">
                    <a href="https://lin.ee/KE4VK7d" target="_blank">
                        <img
                            className="contact-icon lazyloaded"
                            alt="headphone ufadeal"
                            width="32px"
                            height="32px"
                            src="https://ufadeal.com/wp-content/themes/deal-theme/assets/headphone.png"
                            data-ll-status="loaded"
                        />
                        <noscript>
                            <img
                                className="contact-icon"
                                alt="headphone ufadeal"
                                width="32px"
                                height="32px"
                                src="https://ufadeal.com/wp-content/themes/deal-theme/assets/headphone.png"
                            />
                        </noscript>
                        <span className="text-contact contact-info">สอบถาม</span>
                    </a>
                </div>
            </div>
        </>
    )
}