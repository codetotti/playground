import React from "react";
import Home from "../components/Home";
import Playground from "../components/Playground";
import { Container } from "reactstrap";
import { Switch, Route } from "react-router-dom";

export default function MainBody() {
  return (
    <>
      <Container fluid={true}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/playground" component={Playground} />
        </Switch>
      </Container>
    </>
  );
}
