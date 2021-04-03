import Home from "./component/Home";
import Navigation from "./component/Nav/Nav";
import "./styles.css";
import ContactUs from "./component/ContactUs";
import About from "./component/Home/About";
import CheckWeather from "./component/CheckWeather/CheckWeather";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutProject from "./component/about/AboutProject";
export default function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navigation />
          <Switch className="space">
            <Route path="/" exact component={AboutProject} />
            <Route path="/home" exact component={Home} />
            <Route path="/contact" exact component={ContactUs} />
            <Route path="/checkWeather" exact component={CheckWeather} />
            <Route path="/about" exact component={About} />
          </Switch>
        </div>
      </Router>
    </>
  );
}
