import React from "react";
import { Container } from "react-bootstrap";

const Hero = () => {
  return (
    <Container
      fluid
      className="d-flex justify-content-center bg-dark p-5 text-center text-light"
      id="home"
    >
      <p className="my-auto">
        Hey, I'm <h1>Stevon Wright</h1>
        Software Developer
      </p>
    </Container>
  );
};

export default Hero;
