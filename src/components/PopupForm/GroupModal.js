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
        initialValues={{ title: "mr", name: "", gender: "", email: "" }}
        validationSchema={yup.object().shape({
          title: yup.string().required("Please select title"),
          name: yup.string().required("Please fill name."),
          gender: yup.string().required("Please fill gender."),
          email: yup.string().required("Please fill email.")
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
                  <Col md={12}>
                    <Label for="groupTitle">Title</Label>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="title" value={values.title} />{" "}
                        Mr
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="title" /> Ms
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="title" /> Miss
                      </Label>
                    </FormGroup>
                  </Col>
                  <Col md={12}>
                    <FormGroup>
                      <Label for="groupTitle">Name</Label>
                      <Input
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        invalid={touched.name && !!errors.name}
                        type="text"
                        name="name"
                        placeholder="Name"
                      />
                      {touched.name && !!errors.name && (
                        <FormFeedback>{errors.name}</FormFeedback>
                      )}
                    </FormGroup>
                  </Col>
                  <Col md={12}>
                    <FormGroup>
                      <Label for="groupSubtitle">Gender</Label>
                      <Input
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.gender}
                        invalid={touched.gender && !!errors.gender}
                        type="text"
                        name="gender"
                        placeholder="Gender"
                      />
                      {touched.gender && !!errors.gender && (
                        <FormFeedback>{errors.gender}</FormFeedback>
                      )}
                    </FormGroup>
                  </Col>
                  <Col md={12}>
                    <FormGroup>
                      <Label for="groupContent">Email</Label>
                      <Input type="text" name="email" placeholder="Email" />
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
