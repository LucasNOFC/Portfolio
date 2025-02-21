import React from "react";
import "./CourseCard.css";

const CoursesCard = ({ Tittle, Location, Date, Desc, Photo }) => {
  return (
    <div className="courses-card-container">
      <img src={`${import.meta.env.BASE_URL} ${Photo}`} alt="Education photo" className="course-image" />
      <div className="course-info-container">
        <h1 className="course-tittle">{Tittle}</h1>
        <h2 className="course-location">{Location}</h2>
        <h5 className="course-date">{Date}</h5>
        <p className="course-desc">{Desc}</p>
      </div>
    </div>
  );
};

export default CoursesCard;
