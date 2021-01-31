import TheLayout from '../components/TheLayout'
import ThePopup from '../components/ThePopup';
import HomePage from './home/HomePage'
export default function Home() {
	return (
		<div className="bg-image">
			<TheLayout>
				<HomePage/>
			</TheLayout>
			{/* <ThePopup/> */}
		</div>
	);
}
