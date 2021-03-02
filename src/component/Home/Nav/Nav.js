import Navbar from "react-bootstrap/Navbar";
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
      <Navbar>
        {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
        {/* <Switch> */}
        <Nav>
          <Link className="navlink" to="/home">
            Home
          </Link>

          <Link className="navlink" to="/contact">
            Features
          </Link>
          <Link className="navlink" to="/about">
            Pricing
          </Link>
        </Nav>
        {/* </Switch> */}
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </>
  );
};

export default Navigation;
