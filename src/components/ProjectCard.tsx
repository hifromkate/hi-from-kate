import classes from "./ProjectCard.module.css";

type Props = {
  image: string;
  title: string;
  description: string;
};

const ProjectCard = ({ image, title, description }: Props) => {
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
