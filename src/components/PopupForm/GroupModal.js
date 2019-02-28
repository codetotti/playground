import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Form,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  FormFeedback
} from "reactstrap";

import { Formik } from "formik";
import * as yup from "yup";

export default function({ modal, setIsModalActive }) {
  let [openModal, setOpenModal] = useState(modal);
  let [prevRow, setPrevRow] = useState(false);

  // const useForceUpdate = () => useState()[1];

  if (modal !== prevRow) {
    setOpenModal(modal);
    setPrevRow(modal);
    if (modal) {
      //console.log('reset')
      // useForceUpdate()
    }
  }

  const toggle = () => {
    setOpenModal(false);
    setIsModalActive(false);
    setPrevRow(openModal);
  };

  // const onSubmit = (values) => {
  //     console.log(values)
  // }

  // const handleSubmit = (values) => {
  //     console.log(values)
  // }

  return (
    <>
      <Formik
        initialValues={{ title: "", subtitle: "", content: "" }}
        validationSchema={yup.object().shape({
          title: yup.string().required("Please fill title."),
          subtitle: yup.string().required("Please fill subtitle."),
          content: yup.string().required("Please fill content.")
        })}
        // onSubmit={values => onSubmit(values)}
        render={({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit
        }) => (
          <Form onSubmit={handleSubmit}>
            <Modal isOpen={openModal} toggle={toggle}>
              <ModalHeader>New Group</ModalHeader>
              <ModalBody>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="groupTitle">Title</Label>
                      <Input
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.title}
                        invalid={touched.title && !!errors.title}
                        type="text"
                        name="title"
                        placeholder="Group Title"
                      />
                      {touched.title && !!errors.title && (
                        <FormFeedback>{errors.title}</FormFeedback>
                      )}
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="groupSubtitle">Subtitle</Label>
                      <Input
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.subtitle}
                        invalid={touched.subtitle && !!errors.subtitle}
                        type="text"
                        name="subtitle"
                        placeholder="Group Subtitle"
                      />
                      {touched.subtitle && !!errors.subtitle && (
                        <FormFeedback>{errors.subtitle}</FormFeedback>
                      )}
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="groupContent">Content</Label>
                      <Input
                        type="text"
                        name="content"
                        placeholder="Group Content"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" type="submit">
                  Save
                </Button>{" "}
                {/* <Button color="secondary" onClick={toggle}>Cancel</Button> */}
              </ModalFooter>
            </Modal>
          </Form>
        )}
      />
    </>
  );
}
