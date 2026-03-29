import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <div className="landing-section" id="landingDiv">
      <div className="landing-container">

        <div className="landing-intro">
          <h2>Hello! I'm</h2>
          <h1>
            ADITYA
            <br />
            <span>GOEL</span>
          </h1>
        </div>

        <div className="landing-info">
          <h3>ARTIFICIAL INTELLIGENCE</h3>

          <h2 className="landing-info-h2">
            <span className="landing-h2-1">Product</span>
            <span className="landing-h2-2">Automation</span>
          </h2>

          <h2 className="landing-info-sub">
            <span className="landing-h2-info">Strategist</span>
            <span className="landing-h2-info-1">Consultant</span>
          </h2>
        </div>

      </div>
      {children}
    </div>
  );
};

export default Landing;