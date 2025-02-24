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
              Formado em Análise e Desenvolvimento de Sistemas pela Faculdade
              CDL, busco uma oportunidade como Desenvolvedor Júnior Full Stack.
              Minhas principais stacks incluem React, TypeScript, MySQL e
              Node.js, além de experiência em Python e C#. Tenho um forte
              interesse por tecnologia e programação desde cedo, sempre motivado
              pela curiosidade e pela busca por soluções inovadoras. Destaco
              minha habilidade em criação de scripts e desenvolvimento de
              projetos práticos, unindo criatividade e eficiência para resolver
              desafios de forma estratégica.
            </p>
          </div>
          <p className="download-curriculum">
            Baixe o meu currículo aqui <UploadFileIcon/>
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
