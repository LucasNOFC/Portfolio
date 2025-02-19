import React from "react";
import "./Skills.css";
import stack from "../../data/skills.json";
import CardItem from "../../components/CardItem/CardItem";

const Skills = () => {
  return (
    <div className="main-skills-container">
      <div className="skills-container">
        {stack.map((value, index) => {
          return (
            <CardItem
              image={value.image}
              tittle={value.tittle}
              desc={value.desc}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
