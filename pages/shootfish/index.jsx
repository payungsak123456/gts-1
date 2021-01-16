import TheLayout from '../../components/TheLayout';
import ShootFishDetail from './ShootFishDetail';
import NextSeoPage from "./NextSeoPage";
import GameSheet from './GameSheet';
export default function CasinoPage() {
	return (
		<div className="bg-image shootfish">
			<NextSeoPage/>
			<TheLayout>
			<ShootFishDetail/>
			<GameSheet/>
			</TheLayout>
		</div>
	);
}
