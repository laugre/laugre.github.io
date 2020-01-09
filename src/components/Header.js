import React from 'react';
import Scroll from './Scroll';
import config from '../../config';

export default function Header({ title, heading, avatar }) {
  return (
    <section id="header">
      <div className="inner">
        <h2>{config.authorName}</h2>
        <p>{config.heading1}</p>
      </div>
      <Scroll type="id" element="banner">
        <a href="#banner" className="button style2 more">
          What Else ?
        </a>
      </Scroll>
    </section>
  );
}
