import React, { Component } from "react";
import "./ProjectCard.css";

const ProjectCard = (props) => {
  return (
    <div id="container">
      <div className="card">
        <img src={props.avatar} alt="Picture can not be displayed"></img>
        <div className="card__details">
          <span className="tag">{props.tag1}</span>
          <span className="tag">{props.tag2}</span>
          <span className="tag">{props.tag3}</span>
          <div className="name">{props.projectName}</div>

          <p>{props.cardText}</p>
          <button>Read more</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
