import DetailSheet from '../login/DetailSheet';
import TheLayout from './../../components/TheLayout';
import NextSeoPage from "./NextSeoPage";
export default function Login() {
	return (
		<div className="bg-image">
			<NextSeoPage />
			<TheLayout>
				<DetailSheet/>
			</TheLayout>
		</div>
	);
}
