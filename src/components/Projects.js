import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';
import { Link } from 'gatsby';
import ProjectData from '../datas/projects.json';

export class Projects extends Component {
  render() {
    return (
      <div>
        {ProjectData.map((projectDetails, index) => {
          return (
            <Parallax strength={150} className={"container box style1 " + (index%2 ? 'left' : 'right')}>
              <div id="first" className="inner">
                <header>
                  <h2>{projectDetails.title}</h2>
                  <h3>{projectDetails.subtitle}</h3>
                </header>
                {/* <p>{projectDetails.text}</p> */}
              </div>
              <Background className="image">
                <img src={require('../assets/images/' + projectDetails.image)} alt="" />
              </Background>
              <Link to={"/Element" + index}> here </Link>
            </Parallax>
          );  
        })}
      </div>
    );
  }
}

export default Projects;
