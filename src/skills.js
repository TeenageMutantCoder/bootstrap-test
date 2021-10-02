import React from "react";
import logoSvg from "./logo.svg";
import { Card, Col, Container, Row } from "react-bootstrap";

const Skills = () => {
  return (
    <Container id="skills" className="py-3">
      <h2 className="text-center">Skills</h2>
      <p>
        Tempor aute commodo ut anim ad excepteur pariatur veniam dolor
        adipisicing culpa qui minim veniam. Voluptate velit amet qui dolor
        reprehenderit sunt quis velit excepteur nisi laboris Lorem eu. Id in
        officia mollit incididunt nulla excepteur. Amet magna magna laboris ea
        duis reprehenderit consequat aute tempor proident nulla velit voluptate
        esse. In nulla aliqua anim cupidatat. Ut magna velit ipsum ad mollit
        occaecat qui ea ad esse.
      </p>
      <Row>
        {[...Array(10).keys()].map((count) => (
          <Col xs="4" md="2">
            <Card key={count} className="text-center p-1 my-2">
              <Card.Img variant="top" src={logoSvg} alt="Skill logo"></Card.Img>
              <Card.Text>Skill Name</Card.Text>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Skills;
