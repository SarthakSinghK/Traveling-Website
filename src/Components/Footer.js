import React from "react";
import { pagelinks, socialLinks } from "../data";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pagelinks.map((like) => {
          const { id, hre, txt } = like;
          return (
            <li id={id}>
              <a href={hre} class="footer-link">
                {txt}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="footer-icons">
        const {socialLinks.map((lick) => {
          const { id, hre, icn } = lick;
          return (
            <li key={id}>
              <a
                href={hre}
                target="_blank"
                className="footer-icon"
                rel="noreferrer"
              >
                <i className={icn}></i>
              </a>
            </li>
          );
        })}
      </ul >
      <p class="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
