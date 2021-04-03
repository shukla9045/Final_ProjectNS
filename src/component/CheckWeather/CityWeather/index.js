import React from "react";
import { Form, Button, Container } from "react-bootstrap";

const cityWheather = ({
  flag,
  description,
  temp,
  name,
  temp_min,
  temp_max,
  humidity,
  windspeed
}) => {
  const display = () => {
    if (flag) {
      return (
        <>
          <h1>Name : {name}</h1>
          <h1>Temperature(in K) : {temp}</h1>
          <h1>Description : {description}</h1>
          <h1>Min temp : {temp_min}</h1>
          <h1>Max temp : {temp_max}</h1>
          <h1>Humidity : {humidity}</h1>
          <h1>Wind Speed : {windspeed}</h1>
        </>
      );
    } else {
      return "";
    }
  };

  return <>{display()}</>;
};

export default cityWheather;
