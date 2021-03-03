import Home from "./component/Home";
import Navigation from "./component/Home/Nav/Nav";
import "./styles.css";
import ContactUs from "./component/Home/ContactUs";
import About from "./component/Home/About";
import Form from "./component/main/Form";
import TodoList from "./component/main/Todolist";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyApp from "./component/main/datetime";
export default function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch className="space">
          <Route path="/" exact />
          <Route path="/home" exact component={Home} />
          <Route path="/contact" exact component={ContactUs} />
          <Route path="/about" exact component={About} />
        </Switch>
      </div>
      {/* <header>
        <h1>To do List</h1>
      </header> */}
    </Router>
  );
}
