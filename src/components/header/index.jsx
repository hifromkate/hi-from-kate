import React from "react";
import classes from "./header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <div className={classes.header}>
          <Link to="/" className={classes.text__logo}>
            hifromkate
          </Link>
          <ul className={classes.menu}>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
