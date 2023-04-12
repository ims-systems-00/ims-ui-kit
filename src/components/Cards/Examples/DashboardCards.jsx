import React from "react";
import Card from "../CardBase";
import CardBody from "../CardBodyBase";
import CardFooter from "../CardFooterBase";
import CardHeader from "../CardHeaderBase";

const DashboardCards = ({}) => {
  return (
    <React.Fragment>
      <Card variant="active">
        <CardHeader>Active Card</CardHeader>
        <CardBody>
          This is a primary card. Use this to show important information to the
          user.
        </CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
      <Card variant="primary">
        <CardHeader>Primary Card</CardHeader>
        <CardBody>
          This is a primary card. Use this to show important information to the
          user.
        </CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
      <Card variant="secondary">
        <CardHeader>Secondary Card</CardHeader>
        <CardBody>
          This is a primary card. Use this to show important information to the
          user.
        </CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
      <Card variant="light">
        <CardHeader>Light Card</CardHeader>
        <CardBody>
          This is a primary card. Use this to show important information to the
          user.
        </CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
      <Card variant="list">
        <CardHeader>List Card</CardHeader>
        <CardBody>
          This is a primary card. Use this to show important information to the
          user.
        </CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
      <Card variant="gradient" color="primary">
        <CardHeader>Gradient Primary Card</CardHeader>
        <CardBody>
          This is a primary card. Use this to show important information to the
          user.
        </CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
      <Card variant="gradient" color="danger">
        <CardHeader>Gradient Danger Card</CardHeader>
        <CardBody>
          This is a primary card. Use this to show important information to the
          user.
        </CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
      <Card variant="gradient" color="success">
        <CardHeader>Gradient Success Card</CardHeader>
        <CardBody>
          This is a primary card. Use this to show important information to the
          user.
        </CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
      <Card variant="outline">
        <CardHeader>Outline Card</CardHeader>
        <CardBody>
          This is a primary card. Use this to show important information to the
          user.
        </CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
      <Card variant="primary" hover={false}>
        <CardHeader>Primary Card With No Hover Effect</CardHeader>
        <CardBody>
          This is a primary card. Use this to show important information to the
          user.
        </CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
      <Card variant="secondary" hover={false}>
        <CardHeader>Secondary Card With No Hover Effect</CardHeader>
        <CardBody>
          This is a primary card. Use this to show important information to the
          user.
        </CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
      <Card variant="light" hover={false}>
        <CardHeader>Light Card With No Hover Effect</CardHeader>
        <CardBody>
          This is a primary card. Use this to show important information to the
          user.
        </CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
      <Card variant="active" hover={false}>
        <CardHeader>Active Card With No Hover Effect</CardHeader>
        <CardBody>
          This is a primary card. Use this to show important information to the
          user.
        </CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
      <Card variant="outline" hover={false}>
        <CardHeader>Outline Card With No Hover Effect</CardHeader>
        <CardBody>
          This is a primary card. Use this to show important information to the
          user.
        </CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
    </React.Fragment>
  );
};

export default DashboardCards;
