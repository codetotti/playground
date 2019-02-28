import React from "react";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody
} from "reactstrap";

export default function ContentItem(props) {
  console.log(props);
  // const [buttonName] = useState('Save');
  const { title, subtitle, content } = useDefault(props.data);
  const saveButton = "Save";
  const EditButton = "Edit";
  const DelButton = "Delete";

  return (
    <Card>
      {/* <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" /> */}
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
        <CardText>{content}</CardText>
        <Button outline color="success">
          {saveButton}
        </Button>{" "}
        <Button outline color="warning">
          {EditButton}
        </Button>{" "}
        <Button outline color="danger">
          {DelButton}
        </Button>
      </CardBody>
    </Card>
  );
}

function useDefault(defaultVal = null) {
  if (defaultVal !== null) {
    return { ...defaultVal };
  }
  return { title: "", subtitle: "", content: "" };
}
