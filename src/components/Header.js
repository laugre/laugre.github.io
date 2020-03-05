import React from 'react';
import Scroll from './Scroll';
import config from '../../config';

export default function Header({ title, heading1, heading2 }) {
  return (
    <section id="header">
      <div className="inner">
        <h1>{config.authorName}</h1>
        <p>{config.heading1}</p>
        <p>{config.heading2}</p>
      </div>
      <Scroll type="id" element="banner" offset={-20}>
        <a href="#banner" className="button style1 more">
          What Else ?
        </a>
      </Scroll>
    </section>
  );
}
