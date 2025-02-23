import React, { useEffect, useState } from "react";
import "./BannerContainer.css";
import BannerCarrousel from "../BannerCarrousel/BannerCarrousel";
import { Link } from "react-router-dom";

const BannerContainer = ({ item }) => {
  const [project, setProject] = useState(null);

  useEffect(() => {
    item.map((value) => {
      setProject(value);
    });
  });

  if (!project) return <p>Carregando...</p>;

  return (
    <div className="banner-container">
      <BannerCarrousel images={Object.values(project.Images)} />
      <div className="banner-info">
        <div className="banner-texts">
          <h1 className="project-title">{project.Tittle}</h1>
          <p className="project-desc">{project.Desc}. Veja o meu projeto <Link to={project.GitRepo} className="repo-style">aqui</Link></p>
        </div>
      </div>
      <p className="has-api">{project.hasAPI ? "Contém API" : ""}</p>
    </div>
  );
};

export default BannerContainer;
