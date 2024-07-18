import React from 'react'
import { pagelinks } from '../data';

const Pagelinks = (props) => {
  return (
    <ul className={props.classnams} id="nav-links"> 
      {pagelinks.map((linku) => {
        return (
          <li key={linku.id}>
            <a href={linku.hre} className={props.classnam}>
              {linku.txt}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default Pagelinks
