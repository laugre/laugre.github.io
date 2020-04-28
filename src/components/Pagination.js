import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import '../assets/sass/pagination.scss';

export default function Pagination({ previous, next }) {
  return (
    <div className="pagination-buttons">
      <AniLink cover to={previous} direction="right" bg="black" className="icon fa-arrow-left button-previous" />
      <AniLink cover to={next} direction="left" bg="black" className="icon fa-arrow-right button-next" />
    </div>
  );
}
