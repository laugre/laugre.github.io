import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';
import { Link } from 'gatsby';
import ProjectData from '../data/projects.json';

export class Projects extends Component {
  render() {
    return (
      <div>
        {ProjectData.map((projectDetails, index) => {
          return (
            <Link key={index} to={'/projects/' + projectDetails.slug}>
              <Parallax
                strength={200}
                bgImage={require('../assets/images/' + projectDetails.image)}
                className={'project-selector ' + (index % 2 ? 'right' : 'left')}
                renderLayer={percentage => (
                  <div
                    style={{
                      position: 'absolute',
                      background: `rgba(0, 0, 0, ${Math.cos(2*Math.PI*percentage)})`,
                      width: '100%',
                      height: '100%',
                    }}
                  />
                )}
              >
                <div className="parallax-content"></div>
              </Parallax>
              <header
                className={'project-header ' + (index % 2 ? 'right1' : 'left1')}
              >
                <h1>{projectDetails.title}</h1>
                <h3>{projectDetails.subtitle}</h3>
              </header>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default Projects;
