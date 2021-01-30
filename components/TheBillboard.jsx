import Link from "next/link";

export default function TheBillboard() {
	return (
		<>
			<div
				id="topbar2"
				className="d-xs-none d-sm-none d-md-none d-lg-block fxx tt_open2"
			>
				{/* <Link href="https://www.google.com">
					<a className="tt_l mb-5 tt_img_fixed2" target="_blank">
						<img src="/assets/images/billboard/bank.png" />
					</a>
				</Link>

				<Link href="https://www.google.com">
					<a className="tt_l mb-5 tt_img_fixed2" target="_blank">
						<img src="assets/images/billboard/register-web.png" />
					</a>
				</Link>
				<Link href="https://www.google.com">
					<a className="tt_l mb-5 tt_img_fixed2" target="_blank">
						<img src="assets/images/billboard/register-line.png" />
					</a>
				</Link> */}
			</div>
            <div id="topbar" className="fxx">
			<Link href="https://lin.ee/SGc236G">
				<a className="tt_img_fixed">
					<img src="assets/images/line.png" />
					<span className="tt_tx_line"> ติดต่อเจ้าหน้าที่</span>
				</a>
			</Link>
			</div>
		</>
	);
}
