import React from "react";
import classes from "./projectCard.module.css";

const ProjectCard = ({ image, title, description }) => {
  return (
    <div className={classes.card__wrapper}>
      <div className={classes.image__wrapper}>
        <img src={image} alt={title}></img>
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default ProjectCard;
