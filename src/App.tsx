import classes from "./App.module.css";
import Header from "./components/Header";
import Main from "./pages/Main";
import Projects from "./pages/Projects";
import { Switch, Route } from "react-router";

function App() {
  return (
    <div className={classes.app}>
      <Header />
      <Switch>
        <Route path="/projects" component={Projects} />
        <Route path="/" component={Main} />
      </Switch>
    </div>
  );
}

export default App;
