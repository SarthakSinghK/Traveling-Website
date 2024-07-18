import React from 'react'
import { socialLinks } from '../data';


const Sociallinks = (props) => {
  return (
    <ul className={props.parentclass}>
      {socialLinks.map((scil) => {
        const { id, hre, icn } = scil;
        return (
          <li key={id}>
            <a href={hre} target="_blank" className={props.childclass}>
              <i className={icn}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default Sociallinks
