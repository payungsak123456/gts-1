import NextSeoPage from "./NextSeoPage";
import DetailSheet from "./DetailSheet";
import SlideSheet from "./SlideSheet";
import GameSheet from "./GameSheet";
import ThePopup from './../../components/ThePopup';

export default function HomePage() {
    return (
      <>
      <NextSeoPage/>
      <SlideSheet/>
      <GameSheet/>
      <DetailSheet/>     
			<ThePopup/> 
      </>
    );
  }
  