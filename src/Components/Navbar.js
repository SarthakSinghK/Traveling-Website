import React from "react";
import logopic from "../images/logo.svg";
import Pagelinks from "./Pagelinks";
import Sociallinks from "./Sociallinks";

// import { } from "../data";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logopic} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>

          <Pagelinks classnams="nav-links" classnam="nav-link" />
          <Sociallinks parentclassName="nav-icons" childclassName="nav-icon" />
          {/* <!-- left this comment on purpose --> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
