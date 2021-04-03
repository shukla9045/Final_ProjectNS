import React from "react";
import { Form, Button, Container } from "react-bootstrap";

const CityInput = ({ city, setCity, fetchCityWeather, setFlag }) => {
  //const [city, setCity] = React.useState("");
  const [error, setError] = React.useState("");
  const handleInputChange = (event) => {
    setCity(event.target.value);
  };
  //console.log("cityis", city);
  const handleClick = () => {
    if (!city || !city.trim()) {
      setError("City Field is Empty");
      setFlag(false);
    } else {
      setFlag(true);
      //api call
      fetchCityWeather();
      //const tempr = cityWeather.main.temp ;
      setError("");
      // console.log(temp);
    }
  };

  return (
    <Container>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            value={city}
            placeholder="Enter City"
            onChange={handleInputChange}
          />
          <div>
            <p className="text-danger">{error}</p>
          </div>
        </Form.Group>
        <Button variant="primary" onClick={handleClick}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default CityInput;
