import TheLayout from '../../components/TheLayout';
import ShootFishDetail from './ShootFishDetail';
import NextSeoPage from "./NextSeoPage";
export default function CasinoPage() {
	return (
		<div className="bg-image">
			<NextSeoPage/>
			<TheLayout>
			<ShootFishDetail/>
			</TheLayout>
		</div>
	);
}
