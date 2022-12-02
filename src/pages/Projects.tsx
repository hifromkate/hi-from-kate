import React from "react";
import classes from "./Projects.module.css";
import ProjectCard from "../components/ProjectCard";
import xeelas from "../images/xeelas.jpg";
import blockbax from "../images/blockbax.svg";
import fivewalls from "../images/fivewalls.jpg";
import zimizam from "../images/zimizam.png";
import torch from "../images/torch.svg";
import tiberius from "../images/tiberius.png";

const projects = [
  {
    title: "Blockbax",
    image: blockbax,
    description: "Low-code IoT platform that provides cutting-edge visualizations and real-time analytics",
  },
  {
    title: "Xeelas",
    image: xeelas,
    description: "IoT solutions for assets or machines on the move",
  },
  {
    title: "Fivewalls",
    image: fivewalls,
    description: "Agency for matching devs with great teams all over the world",
  },
  {
    title: "Zimizam",
    image: zimizam,
    description: "A holistic tool for children that incorporates calm techniques, routines, and exploratory play",
  },
  {
    title: "Torch commerce",
    image: torch,
    description: "Custom-made websites and eCommerce marketing",
  },
  {
    title: "Tiberius",
    image: tiberius,
    description: "Diversified commodity investor and manager",
  },
];

const Projects = () => {
  return (
    <main className={classes.main}>
      <p>
        I participated in the front-end development of websites / platforms or was part of the team at the following
        companies:
      </p>
      <div className={classes.projects__wrapper}>
        {projects.map(project => (
          <ProjectCard
            key={project.title}
            title={project.title}
            image={project.image}
            description={project.description}
          />
        ))}
      </div>
    </main>
  );
};

export default Projects;
