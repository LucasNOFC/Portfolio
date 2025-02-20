import React, { useState, useEffect } from "react";
import BannerContainer from "../../components/BannerContainer/BannerContainer";
import createdProjects from "../../data/projects.json";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="project-information">
        <h1>Projetos</h1>
        <p>Projetos onde tudo aprendido foi colocado em prática.</p>
      </div>
      <div className="project-container">
        {createdProjects.map((item, index) => {
          return <BannerContainer key={index} item={Object.values(item)} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
