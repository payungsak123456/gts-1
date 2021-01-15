import TheLayout from '../../components/TheLayout';
import SportDetail from './SportDetail';
import NextSeoPage from "./NextSeoPage";
export default function SportPage() {
	return (
		<div className="bg-image">
			<NextSeoPage/>
			<TheLayout>
			<SportDetail/>
			</TheLayout>
		</div>
	);
}
