import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
export default function GameSheet() {
	return (
		<>
			<div className="container">
				<div className="pt-5 text-center">
					<h3 className="text-neno-titel">เว็บคาสิโน จากค่ายชั้นนำ</h3>
				</div>
				<div className="box-game">
					{/* <div className="list-game">
						<Link href="/login">
							<a>
								<img src="https://sv1.picz.in.th/images/2021/01/25/lHEJeb.png" alt="Virtual,Sports,Virtual+Sports,แทงบอลออนไลน์" />
								<p className="m-0" style={{ color: "beige" }}>แทงบอลออนไลน์</p>
							</a>
						</Link>
</div>
					</div> */}
					<div className="m-auto">
						<div className="list-game">
							<Link href="/login">
								<a>
									<img src="https://sv1.picz.in.th/images/2021/01/25/lHEJeb.png" alt="Ebet,บาคารา" />
									<p className="m-0" style={{ color: "beige" }}>บาคาราออนไลน์</p>
								</a>
							</Link>
						</div>
					</div>
					<div className="m-auto">
						<div className="list-game">
							<Link href="/login">
								<a>
									<img src="https://sv1.picz.in.th/images/2021/01/25/lHEmOa.png" alt="Tip,เกมสล๊อต" />
									<p className="m-0" style={{ color: "beige" }}>เกมสล๊อต</p>
								</a>
							</Link>
						</div>
					</div>
					<div className="m-auto">
						<div className="list-game">
							<Link href="/login">
								<a>
									<img src="https://sv1.picz.in.th/images/2021/01/25/lHEyaq.png" alt="Joker,สล๊อต,ยิงปลา" />
									<p className="m-0" style={{ color: "beige" }}>สล๊อต และยิงปลา</p>
								</a>
							</Link>
						</div>
					</div>
					<div className="m-auto">
						<div className="list-game">
							<Link href="/login">
								<a>
									<img src="https://sv1.picz.in.th/images/2021/01/25/lHEI4z.png" alt="Hi-Lo,HiLo,ไฮโล" />
									<p className="m-0" style={{ color: "beige" }}>ไฮโล</p>
								</a>
							</Link>
						</div>
					</div>
					<div className="m-auto">
						<div className="list-game">
							<Link href="/login">
								<a>
									<img src="https://sv1.picz.in.th/images/2021/01/25/lHEMx8.png" alt="MuayStep,มวยสเต็ป" />
									<p className="m-0" style={{ color: "beige" }}>มวยสเต็ป</p>
								</a>
							</Link>
						</div>
					</div>
					<div className="m-auto">
						<div className="list-game">
							<Link href="/login">
								<a>
									<img src="https://sv1.picz.in.th/images/2021/01/25/lHOWnR.png" alt="Pokdeng,ป๊อกเด้ง" />
									<p className="m-0" style={{ color: "beige" }}>ป๊อกเด้ง</p>
								</a>
							</Link>
						</div>
					</div>
					<div className="m-auto">
						<div className="list-game">
							<Link href="/login">
								<a>
									<img src="https://sv1.picz.in.th/images/2021/01/25/lHO0d0.png" alt="SexyBaccara,เว็กซี่บาคารา" />
									<p className="m-0" style={{ color: "beige" }}>เว็กซี่บาคารา</p>
								</a>
							</Link>
						</div>
					</div>
					<div className="m-auto">
						<div className="list-game">
							<Link href="/login">
								<a>
									<img src="https://sv1.picz.in.th/images/2021/01/25/lHO7Ku.png" alt="Slotto,หวยออนไลน์" />
									<p className="m-0" style={{ color: "beige" }}>หวยออนไลน์</p>
								</a>
							</Link>
						</div>
					</div>
					<div className="m-auto">
						<div className="list-game">
							<Link href="/login">
								<a>
									<img src="https://sv1.picz.in.th/images/2021/01/25/lHOSPZ.png" alt="Padeg,เกมสล๊อต" />
									<p className="m-0" style={{ color: "beige" }}>เกมสล๊อต</p>
								</a>
							</Link>
						</div>
					</div>
					<div className="m-auto">
						<div className="list-game">
							<Link href="/login">
								<a>
									<img src="https://sv1.picz.in.th/images/2021/01/25/lHOYeI.png" alt="Sv 388,แทงไก่ชนออนไลน์" />
									<p className="m-0" style={{ color: "beige" }}>แทงไก่ชนออนไลน์</p>
								</a>
							</Link>
						</div>
					</div>
					<div className="m-auto">
						<div className="list-game">
							<Link href="/login">
								<a>
									<img src="https://sv1.picz.in.th/images/2021/01/25/lHO43P.png" alt="Ufa-Slot,เกมสล๊อต" />
									<p className="m-0" style={{ color: "beige" }}>เกมสล๊อต</p>
								</a>
							</Link>
						</div>
					</div>
					<div className="m-auto">
						<div className="list-game">
							<Link href="/login">
								<a>
									<img src="https://sv1.picz.in.th/images/2021/01/25/lHONbt.png" alt="Virtual,Sports,Virtual+Sports,แทงบอลออนไลน์" />
									<p className="m-0" style={{ color: "beige" }}>แทงบอลออนไลน์</p>
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
