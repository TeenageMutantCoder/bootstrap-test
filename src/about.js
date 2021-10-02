import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <Container className="mt-3 py-3" id="about">
      <h2 className="text-center">About Me</h2>
      <Row>
        <Col md="6">
          <p>
            Consectetur reprehenderit exercitation voluptate laborum sit irure
            nisi sit. Nulla labore duis consequat reprehenderit veniam.
            Cupidatat pariatur veniam eu adipisicing aliqua id nostrud laborum
            tempor. Elit ut laborum aute et. Aliquip commodo elit sit mollit
            cupidatat. Eiusmod veniam ad velit reprehenderit.
          </p>
        </Col>
        <Col md="6">
          <p>
            Consectetur reprehenderit exercitation voluptate laborum sit irure
            nisi sit. Nulla labore duis consequat reprehenderit veniam.
            Cupidatat pariatur veniam eu adipisicing aliqua id nostrud laborum
            tempor. Elit ut laborum aute et. Aliquip commodo elit sit mollit
            cupidatat. Eiusmod veniam ad velit reprehenderit.
          </p>
        </Col>
        <Col>
          <p>
            Consectetur reprehenderit exercitation voluptate laborum sit irure
            nisi sit. Nulla labore duis consequat reprehenderit veniam.
            Cupidatat pariatur veniam eu adipisicing aliqua id nostrud laborum
            tempor. Elit ut laborum aute et. Aliquip commodo elit sit mollit
            cupidatat. Eiusmod veniam ad velit reprehenderit.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
