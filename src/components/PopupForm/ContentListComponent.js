import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBlock,
  CardText,
  CardTitle,
  CardBody,
  CardSubtitle,
  Table
} from "reactstrap";
import { Container } from "reactstrap";

import ContentItem from "./ContentItem";
import GroupModal from "./GroupModal";
import BreadcrumbsComponent from "./BreadcrumbsComponent";
import axios from "axios";

export default function ContentListComponent() {
  const [contents, setContents] = useState([]);
  const [isModalActive, setIsModalActive] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, []);

  async function fetchProfile() {
    const result = await axios("https://randomuser.me/api/?results=5");
    console.log(result);
    setContents(result.data.results);
  }

  return (
    <>
      <Container fluid={true}>
        <Card>
          <BreadcrumbsComponent />
          <CardBody>
            <CardTitle>Content List</CardTitle>
            <CardText>
              <div>
                <Button
                  color="success"
                  size="sm"
                  onClick={() => {
                    setIsModalActive(true);
                  }}
                >
                  Add
                </Button>{" "}
                <Button color="info" size="sm">
                  Edit
                </Button>
              </div>
              <div>
                <CardText>
                  <Table>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>#</th>
                        <th>#</th>
                      </tr>
                    </thead>
                    <tbody>
                      {contents.length > 0 &&
                        contents.map((content, i) => {
                          let { gender, name, email } = content;
                          return (
                            <>
                              <tr>
                                <th scope="row">{i + 1}</th>
                                <td>{`${name.title} ${name.first} ${
                                  name.last
                                }`}</td>
                                <td>{gender}</td>
                                <td>{email}</td>
                                <td>edit</td>
                                <td>del</td>
                              </tr>
                            </>
                          );
                        })}
                    </tbody>
                  </Table>
                </CardText>
              </div>
            </CardText>
          </CardBody>
        </Card>
      </Container>
      <GroupModal modal={isModalActive} setIsModalActive={setIsModalActive} />
    </>
  );
}
