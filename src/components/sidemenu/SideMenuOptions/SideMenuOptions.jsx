import React from "react";
import { Link } from "react-router-dom";
import "./SideMenuOptions.css";

const SideMenuOptions = ({ url, urlText }) => {
  return (
    <li className="list-link">
      <Link className="link-standard-decoration roboto-text" to={`/${url}`}>{urlText}</Link>
    </li>
  );
};

export default SideMenuOptions;
