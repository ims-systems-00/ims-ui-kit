import React from "react";
import Card from "../CardBase";
import CardHeader from "../CardHeaderBase";
import CardBody from "../CardBodyBase";
import CardFooter from "../CardFooterBase";

const CardPrimary = ({}) => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default CardPrimary;
