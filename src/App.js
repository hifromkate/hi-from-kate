import classes from './app.module.css';
import Header from './components/header';
import Main from './pages/main';
import Projects from './pages/projects';
import { Switch, Route } from 'react-router';

function App() {
  return (
    <div className={classes.app}>
      <Header />
      <Switch>
        <Route path="/projects" component={Projects} />
        <Route path="/" component={Main} />
        {/* <Route path="/memes" component={Memes} /> */}
        */}
      </Switch>
    </div>
  );
}

export default App;
