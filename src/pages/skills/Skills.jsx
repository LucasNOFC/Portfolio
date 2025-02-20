import React from "react";
import "./Skills.css";
import stack from "../../data/skills.json";
import formations from "../../data/formations.json";
import CardItem from "../../components/CardItem/CardItem";
import CoursesCard from "../../components/CourseCard/CoursesCard";

const Skills = () => {
  return (
    <div className="main-skills-container">
      <div className="skills-desc-content">
        <div className="phrase-skills-content">
          <h1 style={{ color: "black" }}>Skills e ferramentas</h1>
          <p>Ferramentas que utilizo e possuo experiência</p>
        </div>
        <div className="skills-container">
          {stack.map((value, index) => {
            return (
              <CardItem image={value.image} tittle={value.tittle} key={index} />
            );
          })}
        </div>
      </div>
      <div className="skills-desc-content">
        <div className="phrase-skills-content">
          <h1 style={{ color: "black" }}>Formação</h1>
        </div>
        <div className="courses-container">
          {formations.map((value, index) => {
            return (
              <CoursesCard
                key={index}
                Tittle={value.Tittle}
                Location={value.Location}
                Date={value.Date}
                Desc={value.Desc}
                Photo={value.Photo}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
