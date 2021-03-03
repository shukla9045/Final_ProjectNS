import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap/Button";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./index.css";

const Home = () => {
  const BootstrapCarousel = () => {
    return (
      <div className="customcr">
        <div class="container-fluid">
          <div className="row title" style={{ marginBottom: "20px" }}>
            {/* <div class="col-sm-12 btn btn-warning">
              How To Use Bootstrap Carousel In ReactJS
            </div> */}
          </div>
        </div>
        <div>
          <Carousel>
            <Carousel.Item style={{ height: "420px", width: "500px" }}>
              <div style={{ color: "black", backgroundColor: "white" }}>
                <h3 style={{ color: "black", backgroundColor: "white" }}>
                  Never forget a thing
                </h3>
                <h5 style={{ color: "black" }}>
                  From groceries to picking up the kids, we help you remember it
                  all, anytime, anywhere
                </h5>
                <img
                  style={{ height: "420px", width: "500px" }}
                  className="d-block w-100"
                  alt=""
                  src="https://desktop.any.do/static/media/any-do-f-1.6eb31196.webp"
                />
              </div>
            </Carousel.Item>

            <Carousel.Item style={{ height: "420px", width: "500px" }}>
              <img
                style={{ height: "420px", width: "500px" }}
                className="d-block w-100"
                alt="hi"
                src="https://desktop.any.do/static/media/any-do-f-2.53697d13.webp"
              />

              <Carousel.Caption>
                <h3>Second Demo</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{ height: "420px", width: "500px" }}>
              <Carousel.Caption></Carousel.Caption>
              <div>
                <div>
                  <div style={{ color: "black", backgroundColor: "white" }}>
                    <h3 style={{ color: "black", backgroundColor: "white" }}>
                      Live Strategically
                    </h3>
                    <h5 style={{ color: "black" }}>
                      Focus on the things that matter to you unlock your true
                      potential
                    </h5>
                    <img
                      style={{ height: "420px", width: "500px" }}
                      className="d-block w-100"
                      alt=""
                      src="https://desktop.any.do/static/media/any-do-f-4.cec5d83e.webp"
                    />
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  };
  return <BootstrapCarousel />;
};
export default Home;
