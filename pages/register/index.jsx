import DetailSheet from './DetailSheet';
import TheLayout from '../../components/TheLayout';
import NextSeoPage from "./NextSeoPage";
export default function Register() {
	return (
		<div className="bg-image">
			<NextSeoPage />
			<TheLayout>
				<DetailSheet/>
			</TheLayout>
		</div>
	);
}
