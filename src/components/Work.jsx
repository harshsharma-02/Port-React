import React from "react";
import "./WorkCardstyle.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";

const Work = () => {
  return (
    <div className="work-cont">
      <h1 className="pr-heading">Projects</h1>
      <div className="pr-cont">
        {WorkCardData.map((val,ind) => {
            return(
                <WorkCard 
                key = {ind} 
                imgsrc = {val.imgsrc}
                text = {val.text}
                view = {val.view}
                />

            )
        })}
      </div>
    </div>
  );
};

export default Work;
