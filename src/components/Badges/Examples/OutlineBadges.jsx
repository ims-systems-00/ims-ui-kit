import React from "react";
import Badge from "../BadgeBase";

const OutlineBadges = ({}) => {
  return (
    <>
      <Badge outline="primary">Primary</Badge>
      <br /> <br />
      <Badge outline="info">Info</Badge>
      <br /> <br />
      <Badge outline="secondary">Secondary</Badge>
      <br /> <br />
      <Badge outline="success">Success</Badge>
      <br /> <br />
      <Badge outline="danger">Danger</Badge>
      <br /> <br />
      <Badge outline="warning">Warning</Badge>
      <br /> <br />
      <Badge outline="dark">Dark</Badge>
      <br /> <br />
      <Badge outline="pending">Pending</Badge>
    </>
  );
};

export default OutlineBadges;
