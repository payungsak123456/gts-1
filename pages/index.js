import TheLayout from '../components/TheLayout'
import HomePage from './home/HomePage'
export default function Home() {
	return (
		<div className="bg-image">
			<TheLayout>
				<HomePage/>
			</TheLayout>
		</div>
	);
}
