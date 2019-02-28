import React from "react";
import { Row, Col } from "reactstrap";
import CardItem from "../components/CardItem";
import PlaygroundNavBar from "./PlaygroundNavBar";
import { Switch, Route } from "react-router-dom";
import ContentListComponent from "./PopupForm/ContentListComponent";

export default function Playground({ match }) {
  return (
    <>
      <Row>
        <Col sm="3">
          <PlaygroundNavBar />
        </Col>
        <Col sm="9">
          <Row>
            <Switch>
              <Route
                path={`${match.url}/popup-form`}
                component={ContentListComponent}
              />
            </Switch>
          </Row>
        </Col>
      </Row>
    </>
  );
}
