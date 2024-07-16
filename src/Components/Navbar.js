import React from "react";
import logopic from "../images/logo.svg";
import { pagelinks,socialLinks} from "../data";
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
          {/* <!-- left this comment on purpose --> */} 



          <ul className="nav-links" id="nav-links">
            {pagelinks.map((linku) => {
              return (
                <li key={linku.id}>
                  <a href={linku.hre} className="nav-link">
                    {linku.txt}
                  </a>
                </li>
              );
            })}
          </ul>

          <ul className="nav-icons">
            {socialLinks.map((scil) => {
              const  {id, hre, icn}= scil;
              return (<li key={id}>
                <a href={hre} target="_blank" className="nav-icon">
                  <i className={icn}></i>
                </a>
              </li>)
            })}
          </ul>

        </div>
      </nav>
    </>
  );
};

export default Navbar;
