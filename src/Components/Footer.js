import React from "react";
import { pagelinks, socialLinks } from "../data";
import Pagelinks from "./Pagelinks";
import Sociallinks from "./Sociallinks";

const Footer = () => {
  return (
    <footer className="section footer">
      <Pagelinks classnams="footer-links" classnam="footer-link" />
      <Sociallinks parentclass="footer-icons" childclass="footer-icon"/>
      <p class="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
