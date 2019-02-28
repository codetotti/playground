import React from "react";
import { Form, Row, Col, FormGroup, Label, Input } from "reactstrap";

export default function GroupForm({ modal, setIsModalActive }) {
  return (
    <>
      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="groupTitle">Title</Label>
              <Input type="text" name="title" placeholder="Group Title" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="groupSubtitle">Subtitle</Label>
              <Input type="text" name="subtitle" placeholder="Group Subtitle" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="groupContent">Content</Label>
              <Input type="text" name="content" placeholder="Group Content" />
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </>
  );
}
