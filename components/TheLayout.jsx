import TheHeader from "./TheHeader";
import TheBillboard from "./TheBillboard";
import TheFooter from "./TheFooter";
// import TheMobileMenu from "./TheMobileMenu";
const TheLayout = (props) => (
  <>
    <div className="home">
      <TheHeader />
      <TheBillboard />
      <div className="container">

        <div className="hero-area">
          {props.children}
        </div>
      </div>

      <TheFooter />
    </div>
    {/* <TheMobileMenu /> */}
  </>
);

export default TheLayout;
