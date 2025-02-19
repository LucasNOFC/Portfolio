import React from "react";
import "./Landpage.css";
import { Link } from "react-router-dom";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Landpage = () => {
  return (
    <div className="landpage-container">
      <div className="content-container">
        <div className="landpage-main">
          <h2 className="phrase">Olá, como vai? Me chamo</h2>
          <h1 className="name-tittle">Lucas Nobre</h1>
          <p className="phrase-main">Desenvolvedor Full-Stack</p>
        </div>
        <div className="landpage-information">
          <Link className="landpage-link-btn">
            Projetos <ArrowForwardIcon sx={{ fontSize: 25 }} />
          </Link>
          <Link className="landpage-link-btn">
            Baixe meu currículo <UploadFileIcon sx={{ fontSize: 25 }} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landpage;
