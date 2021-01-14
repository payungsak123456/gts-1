import TheHeader from "./TheHeader";
import TheBillboard from "./TheBillboard";
import TheFooter from "./TheFooter";
import TheMobileMenu from "./TheMobileMenu";
  
const TheLayout = (props) => (
  <>
    <div className="container">
      <div className="home">
        <TheHeader />
        <TheBillboard />
        <div className="hero-area">
          {props.children}
        </div>
        <TheFooter />
      </div>
    </div>
    <TheMobileMenu />
  </>
);

export default TheLayout;
