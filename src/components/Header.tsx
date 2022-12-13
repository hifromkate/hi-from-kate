import classes from "./Header.module.css";
import { Link, matchPath, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  const isProjectsRoute = matchPath(pathname, { path: "/projects" });

  return (
    <header>
      <div className={classes.header}>
        <Link to="/" className={classes.text__logo}>
          hifromkate
        </Link>
        <a href="https://savelife.in.ua/donate/" target="_blank" rel="noreferrer">
          🇺🇦 Help Ukraine now
        </a>
        <ul className={classes.menu}>
          <li className={isProjectsRoute ? classes.active : undefined}>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
