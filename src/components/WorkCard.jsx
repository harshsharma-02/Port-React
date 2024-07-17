import React from "react";
import "./WorkCardstyle.css";
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="pr-card">
    <img src={props.imgsrc} alt="img" />
    <h2 className="pr-title">{props.title}</h2>
    <div className="pr-details">
      <p>{props.text}</p>
      <div className="pr-btns">
        <NavLink to={props.view} className="btn">
          View
        </NavLink>
        <NavLink to="url.com" className="btn">
          Source
        </NavLink>
      </div>
    </div>
  </div>
  );
};

export default WorkCard;
