import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button
} from "reactstrap";

export default function CardItem(props) {
  return (
    <Card>
      <CardImg
        top
        width="100%"
        src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
        alt="Card image cap"
      />
      <CardBody>
        <CardTitle>{props.title}</CardTitle>
        <CardSubtitle>{props.subtitle}</CardSubtitle>
        <CardText>{props.text}</CardText>
        <Button>{props.button}</Button>
      </CardBody>
    </Card>
  );
}
