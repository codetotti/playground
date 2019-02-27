import React from "react";
import { Row, Col, Jumbotron, Button } from "reactstrap";
import CardItem from "../components/CardItem";

export default function Playground() {
  return (
    <>
      <Jumbotron>
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">
          This is a simple hero unit, a simple Jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-2" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
      <Row>
        <Col xs="4" sm="4">
          <CardItem
            title="Sample1"
            subtitle="SubSample1"
            text="Sample"
            button="Click"
          />
        </Col>
        <Col xs="4" sm="4">
          <CardItem
            title="Sample2"
            subtitle="SubSample2"
            text="Sample2"
            button="Click"
          />
        </Col>
        <Col xs="4" sm="4">
          <CardItem
            title="Sample3"
            subtitle="SubSample3"
            text="Sample3"
            button="Click"
          />
        </Col>
      </Row>
    </>
  );
}
