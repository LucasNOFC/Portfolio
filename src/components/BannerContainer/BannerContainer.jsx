import React, { useEffect, useState } from "react";
import "./BannerContainer.css";
import BannerCarrousel from "../BannerCarrousel/BannerCarrousel";

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
          <h1 className="project-tittle">{project.Tittle}</h1>
          <p className="project-desc">{project.Desc}</p>
        </div>
      </div>
      <p>{project.hasAPI ? "Possui Api" : ""}</p>
    </div>
  );
};

export default BannerContainer;
