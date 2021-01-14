// import GameList from "./listPage/GameList";
import { Swiper, SwiperSlide } from "swiper/react";
import TheNextSeo from '../components/TheNextSeo'
import TheMobileMenu from '../components/TheMobileMenu'
import TheHeader from '../components/TheHeader'
import TheBillboard from '../components/TheBillboard'
import TheFooter from '../components/TheFooter'
import HomePage from "./views/homepage/HomePage";
export default function Home() {
	return (
		<div className="bg-image">
			<div className="container">
				<TheNextSeo />
				<div className="home">
				<TheHeader />
				<TheBillboard />

					{/* <!-- Hero Area Start --> */}
					<div className="hero-area">
						<br></br>
						<br></br>
						<HomePage/>

						<img
							height="auto"
							width="100%"
							src="assets/images/home/โฆษณา2.png"
							style={{ objectFit : 'cover'}}
						></img>

					
					</div>
					<TheFooter />
				</div>
			</div>
			<TheMobileMenu />
			<script src="assets/js/jquery.js"></script>
			<script src="assets/js/popper.min.js"></script>
			<script src="assets/js/bootstrap.min.js"></script>
			<script src="assets/js/plugin.js"></script>
			<script src="assets/js/TweenMax.js"></script>
			<script src="assets/js/mousemoveparallax.js"></script>
			<script src="assets/js/main.js"></script>
		</div>
	);
}
