import React, { useState } from 'react';
import { Parallax } from 'react-parallax';
import { Link } from 'gatsby';
import ProjectData from '../data/projects.json';
import '../assets/sass/projects.scss';

export default function Projects() {
  const [hover, setHover] = useState(false);

  const toggleHover = () => {
    setHover(!hover);
    console.log("toggleHover", hover);
  };

  return (
    <div>
      {ProjectData.map((projectDetails, index) => {
        return (
          <div key={index}>
            <Parallax
              strength={200}
              bgImage={require('../assets/images/' + projectDetails.image)}
              className={'project-selector ' + (index % 2 ? 'right' : 'left')}
              renderLayer={percentage => (
                <div
                  style={{
                    position: 'absolute',
                    background: `rgba(0, 0, 0, ${Math.cos(
                      2 * Math.PI * percentage
                    )})`,
                    width: '100%',
                    height: '100%',
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
              onMouseEnter={toggleHover}
              onMouseLeave={toggleHover}
            >
              <header
                className={'project-header ' + (index % 2 ? 'right' : 'left')}
              >
                <h1>{projectDetails.title}</h1>
                <h3>{projectDetails.subtitle}</h3>
              </header>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
