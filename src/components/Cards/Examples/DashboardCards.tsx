import React from "react";
import Card from "../CardBase";
import CardBody from "../CardBodyBase";
import CardFooter from "../CardFooterBase";
import CardHeader from "../CardHeaderBase";
import { Col, Row } from "reactstrap";

const DashboardCards = ({}) => {
  return (
    <Row>
      <Col lg="3" md="6" sm="12">
        <Card variant="active">
          <CardHeader>Active Card</CardHeader>
          <CardBody>
            This is a primary card. Use this to show important information to
            the user.
          </CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Col>
      <Col lg="3" md="6" sm="12">
        <Card variant="primary">
          <CardHeader>Primary Card</CardHeader>
          <CardBody>
            This is a primary card. Use this to show important information to
            the user.
          </CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Col>
      <Col lg="3" md="6" sm="12">
        <Card variant="secondary">
          <CardHeader>Secondary Card</CardHeader>
          <CardBody>
            This is a primary card. Use this to show important information to
            the user.
          </CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Col>
      <Col lg="3" md="6" sm="12">
        <Card variant="light">
          <CardHeader>Light Card</CardHeader>
          <CardBody>
            This is a primary card. Use this to show important information to
            the user.
          </CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Col>
      <Col lg="3" md="6" sm="12">
        <Card variant="list">
          <CardHeader>List Card</CardHeader>
          <CardBody>
            This is a primary card. Use this to show important information to
            the user.
          </CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Col>
      <Col lg="3" md="6" sm="12">
        <Card variant="gradient" color="primary">
          <CardHeader>Gradient Primary Card</CardHeader>
          <CardBody>
            This is a primary card. Use this to show important information to
            the user.
          </CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Col>
      <Col lg="3" md="6" sm="12">
        <Card variant="gradient" color="danger">
          <CardHeader>Gradient Danger Card</CardHeader>
          <CardBody>
            This is a primary card. Use this to show important information to
            the user.
          </CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Col>
      <Col lg="3" md="6" sm="12">
        <Card variant="gradient" color="success">
          <CardHeader>Gradient Success Card</CardHeader>
          <CardBody>
            This is a primary card. Use this to show important information to
            the user.
          </CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Col>
      <Col lg="3" md="6" sm="12">
        <Card variant="outline">
          <CardHeader>Outline Card</CardHeader>
          <CardBody>
            This is a primary card. Use this to show important information to
            the user.
          </CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Col>
      <Col lg="3" md="6" sm="12">
        <Card variant="primary" hover={false}>
          <CardHeader>Primary Card With No Hover Effect</CardHeader>
          <CardBody>
            This is a primary card. Use this to show important information to
            the user.
          </CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Col>
      <Col lg="3" md="6" sm="12">
        <Card variant="secondary" hover={false}>
          <CardHeader>Secondary Card With No Hover Effect</CardHeader>
          <CardBody>
            This is a primary card. Use this to show important information to
            the user.
          </CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Col>
      <Col lg="3" md="6" sm="12">
        <Card variant="light" hover={false}>
          <CardHeader>Light Card With No Hover Effect</CardHeader>
          <CardBody>
            This is a primary card. Use this to show important information to
            the user.
          </CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Col>
      <Col lg="3" md="6" sm="12">
        <Card variant="active" hover={false}>
          <CardHeader>Active Card With No Hover Effect</CardHeader>
          <CardBody>
            This is a primary card. Use this to show important information to
            the user.
          </CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Col>
      <Col lg="3" md="6" sm="12">
        <Card variant="outline" hover={false}>
          <CardHeader>Outline Card With No Hover Effect</CardHeader>
          <CardBody>
            This is a primary card. Use this to show important information to
            the user.
          </CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Col>
    </Row>
  );
};

export default DashboardCards;
