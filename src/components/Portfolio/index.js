import React from "react";
import "./style.css";
import ProjectCard from "./ProjectCard";

export default function Portfolio() {
  return (
    <div className="portfolioContainer">
      <div className="firstRow">
        <ProjectCard />
        <div id="portfolioCenterLabel">Portfolio</div>
        <ProjectCard />
      </div>
      <div className="secondRow">
        <ProjectCard />
      </div>
    </div>
  );
}
