import React from "react";
import logo from "./logo.svg";
import { Card, Container, Stack } from "react-bootstrap";

const Projects = () => {
  return (
    <Container id="projects" className="py-3">
      <h2 className="text-center">Projects</h2>
      {[...Array(5).keys()].map(() => (
        <Card>
          <Card.Img src={logo}></Card.Img>
          <Card.Body>
            <Card.Text>
              <p>
                Veniam culpa labore laboris laborum excepteur culpa non laboris.
              </p>
              <p>
                Pariatur tempor nostrud commodo nulla cupidatat exercitation
                nulla do.Dolore excepteur eiusmod Lorem commodo proident cillum
                laboris ad non minim.
              </p>
            </Card.Text>
            <Stack direction="horizontal" className="text-center">
              <Card.Link
                href="#"
                className="w-25 text-decoration-none me-auto bg-dark p-2 text-light"
              >
                Respository
              </Card.Link>
              <Card.Link
                href="#"
                className="w-25 text-decoration-none bg-dark p-2 text-light"
              >
                Live Site
              </Card.Link>
            </Stack>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default Projects;
