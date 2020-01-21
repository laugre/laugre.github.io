import React from 'react';
import ProjectData from '../data/projects.json';
import '../assets/sass/projects.scss';
import ProjectSelector from './ProjectSelector.js';

export default function Projects() {
  return (
    <div>
      {ProjectData.map((projectDetails, index) => {
        return (
          <ProjectSelector key={index} projectDetails={projectDetails} index={index}></ProjectSelector>
        );
      })}
    </div>
  );
}
