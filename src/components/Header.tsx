import classes from "./Header.module.css";
import { Link, matchPath, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  const isProjectsRoute = matchPath(pathname, { path: "/projects" });

  return (
    <header>
      <nav>
        <div className={classes.header}>
          <Link to="/" className={classes.text__logo}>
            hifromkate
          </Link>
          <ul className={classes.menu}>
            <li className={isProjectsRoute ? classes.active : undefined}>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
