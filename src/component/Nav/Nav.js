import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./nav.css";
const Navigation = () => {
  return (
    <>
      {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
      {/* <Switch> */}

      <Nav className="space">
        <Link className="navlink" to="/about">
          About
        </Link>
        <Link className="navlink" to="/home">
          Home
        </Link>

        <Link className="navlink" to="/contact">
          ScheduleTask
        </Link>
        <Link className="navlink" to="/checkWeather">
          CheckWeather
        </Link>
        <Link className="navlink" to="/games">
          Games
        </Link>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Nav>
      {/* </Switch> */}
    </>
  );
};

export default Navigation;
