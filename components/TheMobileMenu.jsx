import Link from "next/link";

export default function TheMobileMenu() {
	return (
		<>
			<div className="m-contact">
				<div className="o-contact">
					<Link href="/login">
						<a>
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
					</Link>
				</div>
				<div className="o-contact">
					<Link href="/register">
						<a>
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
					</Link>
				</div>
				<div className="o-contact">
					<Link href="https://lin.ee/KE4VK7d">
						<a>
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
					</Link>
				</div>
				<div className="o-contact">
					<Link href="https://lin.ee/KE4VK7d" target="_blank">
						<a>
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
							<span className="text-contact contact-info">
								ติดต่อเจ้าหน้าที่
								</span>
						</a>
					</Link>


				</div>
			</div>
		</>
	);
}