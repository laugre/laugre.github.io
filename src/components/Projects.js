import React, { useState } from 'react';
import { Parallax } from 'react-parallax';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import ProjectData from '../data/projects.json';
import '../assets/sass/project-selector.scss';

export default function Projects() {
  return (
    <div>
      {ProjectData.map((projectDetails, index) => {
        return (
          <ProjectSelector
            key={index}
            projectDetails={projectDetails}
            index={index}
          ></ProjectSelector>
        );
      })}
    </div>
  );
}

export function ProjectSelector({ projectDetails, index }) {
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
        <AniLink
          cover
          id="first"
          to={'/projects/' + projectDetails.slug}
          direction="up"
          bg="black"
          onMouseEnter={() => toggleHover(true)}
          onMouseLeave={() => toggleHover(false)}
        >
          <div className={'parallax-content ' + (!hover ? 'hover' : '')}></div>
        </AniLink>
      </Parallax>
      <AniLink
        cover
        style={{ textDecoration: 'none' }}
        to={'/projects/' + projectDetails.slug}
        direction="up"
        bg="black"
        onMouseEnter={() => toggleHover(true)}
        onMouseLeave={() => toggleHover(false)}
      >
        <header
          className={
            'project-selector-header ' +
            (hover ? 'hover ' : ' ') +
            (index % 2 ? 'right' : 'left')
          }
        >
          <h1>{projectDetails.title}</h1>
          <h3>{projectDetails.subtitle}</h3>
        </header>
      </AniLink>
    </div>
  );
}
