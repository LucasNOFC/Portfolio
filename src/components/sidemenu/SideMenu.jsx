import React from "react";
import "./SideMenu.css";
import linkData from "../../data/links.json";
import SideMenuOptions from "./SideMenuOptions/SideMenuOptions";
import "./SideMenu.css";
import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <div className="sidemenu-container">
      <Link className="tittle" to={'/'}>Portfolio</Link>
      <ul className="sidemenu-option">
        {linkData.map((data, index) => {
          return (
            <SideMenuOptions
              key={index}
              url={Object.values(data)}
              urlText={Object.keys(data)}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default SideMenu;
