import photo from "../images/kate.jpeg";
import classes from "./Main.module.css";

const Main = () => {
  return (
    <main>
      <div className={classes.main__wrapper}>
        <div className={classes.left__block}>
          <div className={classes.left__block__upper__block}>
            <div className={classes.emojis__block}>
              <span>&#128540;</span>
              <span>&#128187;</span>
              <span>&#128420;</span>
              <span>&#127774;</span>
            </div>
            <div className={classes.introduction__block}>
              <p>
                Hi, I'm Kate, a front-end (React & TypeScript ❤️‍🔥) developer from Kharkiv, Ukraine. Currently, I live in
                the Netherlands. I'm a fan of writing good and extendable code. I'm also a fan of traveling, meeting new
                people, reading books and eating Asian food.
              </p>
              <p>
                Currently, I look for a frontend developer position in a friendly team. Preferable stack is React &
                TypeScript or a desire to migrate to this stack (cause it's cool!).
              </p>
            </div>
          </div>
          <div className={classes.left__block__bottom__block}>
            <div className={classes.emojis__block}>
              <span>&#128541;</span>
              <span>&#9995;</span>
              <span>&#128221;</span>
              <span>&#128222;</span>
            </div>
            <div className={classes.contacts__block}>
              <p>Reach out to say hi, invite to an awesome project or send ramen recipe:</p>
            </div>
            <div className={classes.links}>
              <p>
                <a href="https://www.linkedin.com/in/kkovalova/" target="_blank" rel="noreferrer">
                  <span>&#129322;</span> Good old Linkedin
                </a>
              </p>
              <p>
                <a href="https://github.com/notimetoanalyse" target="_blank" rel="noreferrer">
                  <span>&#127774;</span> GitHub
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className={classes.right__block}>
          <div className={classes.photo__wrapper}>
            <img src={photo} alt="Kate's smiling" />
          </div>
        </div>
      </div>
    </main>
  );
};
export default Main;
