import React, { useState } from 'react';
import { Parallax } from 'react-parallax';
import { Link } from 'gatsby';
import '../assets/sass/project-selector.scss';

export default function ProjectSelector({ projectDetails, index }) {
  const [hover, setHover] = useState(false);

  const toggleHover = state => {
    setHover(state);
  };

  return (
    <div>
      <Parallax
        strength={200}
        bgImage={require('../assets/images/' + projectDetails.image)}
        className={'project-selector ' + (index % 2 ? 'right' : 'left')}
        renderLayer={percentage => (
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              background: `rgba(0, 0, 0, ${Math.cos(
                2 * Math.PI * percentage
              )})`,
            }}
          />
        )}
      >
        <Link id="first" to={'/projects/' + projectDetails.slug}>
          <div className={'parallax-content ' + (!hover ? 'hover' : '')}></div>
        </Link>
      </Parallax>
      <Link
        id="first"
        to={'/projects/' + projectDetails.slug}
        onMouseEnter={() => toggleHover(true)}
        onMouseLeave={() => toggleHover(false)}
      >
        <header className={'project-selector-header ' + (index % 2 ? 'right' : 'left')}>
          <h1>{projectDetails.title}</h1>
          <h3>{projectDetails.subtitle}</h3>
        </header>
      </Link>
    </div>
  );
}
