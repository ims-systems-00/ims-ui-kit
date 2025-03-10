import React from "react";
import Badge from "../BadgeBase";

const BadgeVariants = ({}) => {
  return (
    <>
      <Badge>Default</Badge>
      <br /> <br />
      <Badge color="primary">Primary</Badge>
      <br /> <br />
      <Badge color="info">Info</Badge>
      <br /> <br />
      <Badge color="secondary">Secondary</Badge>
      <br /> <br />
      <Badge color="success">Success</Badge>
      <br /> <br />
      <Badge color="danger">Danger</Badge>
      <br /> <br />
      <Badge color="warning">Warning</Badge>
      <br /> <br />
      <Badge color="light">Light</Badge>
      <br /> <br />
      <Badge color="dark">Dark</Badge>
      <br /> <br />
      <Badge color="pending">Pending</Badge>
    </>
  );
};

export default BadgeVariants;
