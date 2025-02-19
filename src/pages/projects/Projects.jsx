import React, { useState, useEffect } from "react";
import BannerContainer from "../../components/BannerContainer/BannerContainer";
import createdProjects from "../../data/projects.json";
import "./Projects.css";

const Projects = () => {

  return (
    <div className="app-container project-container">
        {createdProjects.map((item, index) => {
          return <BannerContainer key={index} item={Object.values(item)}/>
        })}
    </div>
  );
};

export default Projects;
