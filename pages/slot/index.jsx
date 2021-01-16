import TheLayout from '../../components/TheLayout';
import SlotDetail from './SlotDetail';
import NextSeoPage from "./NextSeoPage";
import GameSheet from './GameSheet';
export default function SportPage() {
	return (
		<div className="bg-image slot">
			<NextSeoPage/>
			<TheLayout>
			<SlotDetail/>
			<GameSheet/>
			</TheLayout>
		</div>
	);
}
