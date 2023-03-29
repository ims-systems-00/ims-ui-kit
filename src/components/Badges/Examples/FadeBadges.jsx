import React from "react";
import Badge from "../BadgeBase";

const FadeBadges = ({}) => {
  return (
    <>
      <Badge fade="primary">Primary</Badge>
      <br /> <br />
      <Badge fade="info">Info</Badge>
      <br /> <br />
      <Badge fade="secondary">Secondary</Badge>
      <br /> <br />
      <Badge fade="success">Success</Badge>
      <br /> <br />
      <Badge fade="danger">Danger</Badge>
      <br /> <br />
      <Badge fade="warning">Warning</Badge>
      <br /> <br />
      <Badge fade="dark">Dark</Badge>
      <br /> <br />
      <Badge fade="pending">Pending</Badge>
    </>
  );
};

export default FadeBadges;
