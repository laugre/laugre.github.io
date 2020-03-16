import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import '../assets/sass/pagination.scss';

export default function Pagination({ previous, next }) {
  return (
    <div className="pagination-buttons">
      <AniLink cover to={previous} direction="right" bg="black">
        <div className="button-previous"></div>
      </AniLink>
      <AniLink cover to={next} direction="left" bg="black">
        <div className="button-next"></div>
      </AniLink>
    </div>
  );
}
