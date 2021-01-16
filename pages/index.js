import TheLayout from '../components/TheLayout'
import HomePage from './home/HomePage'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Home() {
	return (
		<div className="bg-image">
			<TheLayout>
				<HomePage/>
			</TheLayout>
		</div>
	);
}
