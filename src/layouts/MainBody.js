import React from "react";
import Home from "../components/Home";
import Playground from "../components/Playground";
import { Container } from "reactstrap";
import { Switch, Route } from "react-router-dom";

export default function MainBody() {
  return (
    <>
      <Container fluid="true">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/playground" component={Playground} />
          {/*<Route exact path="/" component={Home} />
            <Route path="/first" component={First} />
            <Route path="/second" component={Second} />
            <Route path="/third" component={Third} />*/}
        </Switch>
      </Container>
    </>
  );
}
