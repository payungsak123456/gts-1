import TheLayout from './../../components/TheLayout';
import CasinoDetail from './CasinoDetail';
import NextSeoPage from "./NextSeoPage";
export default function CasinoPage() {
	return (
		<div className="bg-image">
			<NextSeoPage/>
			<TheLayout>
			<CasinoDetail/>
			</TheLayout>
		</div>
	);
}
