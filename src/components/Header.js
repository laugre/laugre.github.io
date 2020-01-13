import React from 'react';
import Scroll from './Scroll';


export default function Header({ title, heading1, heading2 }) {
  return (
    <section id="header">
      <div className="inner">
        <h2>{title}</h2>
        <p>{heading1}</p>
        <p>{heading2}</p>
      </div>
      <Scroll type="id" element="banner" offset={-100}>
        <a href="#banner" className="button style2 more">
          What Else ?
        </a>
      </Scroll>
    </section>
  );
}
