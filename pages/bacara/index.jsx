import TheLayout from './../../components/TheLayout';
import BacaraDetail from './BacaraDetail';
import NextSeoPage from "./NextSeoPage";
export default function BacaraPage() {
	return (
		<div className="bg-image">
			<NextSeoPage/>
			<TheLayout>
			<BacaraDetail/>
			</TheLayout>
		</div>
	);
}
