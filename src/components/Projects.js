import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import { Link } from 'gatsby';
import ProjectData from '../data/projects.json';
import '../assets/sass/projects.scss';

export class Projects extends Component {
  render() {
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
                  <div className="parallax-content"></div>
                </Link>
              </Parallax>
              <header
                className={'project-header ' + (index % 2 ? 'right' : 'left')}
              >
                <h1>{projectDetails.title}</h1>
                <h3>{projectDetails.subtitle}</h3>
              </header>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Projects;
