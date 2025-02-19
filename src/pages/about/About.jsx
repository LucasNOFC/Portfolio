import React from "react";
import "./About.css";
import UploadFileIcon from "@mui/icons-material/UploadFile";

const About = () => {
  return (
    <section className="landpage-container about-edit">
      <div className="main-container">
        <div className="apresentation-container">
          <div className="apresentation-text">
            <h1 className="apresentation-tittle">Sobre mim</h1>
            <p className="apresentation-phrase">
              Me chamo Lucas, um desenvolvedor fullstack
            </p>
          </div>
          <div className="apresentation-desc">
            <p className="apresentation-desc-complementation">
              Formado em análise e desenvolvimentos de sistemas pela Faculdade
              CDL, busco por uma posição como desenvolvedor júnior fullstack.
              Utilizo React, Typerscript, MySQL, NodeJS como minhas stacks
              principais, tenho projetos feitos em python, c#. Desde pequeno
              fascinado por pensar fora da caixa, tecnologia e computadores, em
              especial na área de criação de scripts.
            </p>
          </div>
          <p className="download-curriculum">
            Baixe o meu currículo aqui <UploadFileIcon />
          </p>
        </div>
        <div className="contact-container">
          <h1 className="contact-tittle">Contatos</h1>
          <p className="contact-phrase">Fortaleza - Ceará, Brasil</p>
          <div className="container-information">
            <p>Linkedin:lucasnobreoficial</p>
            <p>Github:LucasNOFC</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
