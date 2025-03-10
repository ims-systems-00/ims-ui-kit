import React from "react";
import Badge from "../BadgeBase";

const LinkBadge = ({}) => {
  return (
    <>
      <Badge href="#">Default</Badge>
      <br /> <br />
      <Badge color="primary" href="#">
        Primary
      </Badge>
      <br /> <br />
      <Badge color="info" href="#">
        Info
      </Badge>
      <br /> <br />
      <Badge color="secondary" href="#">
        Secondary
      </Badge>
      <br /> <br />
      <Badge color="success" href="#">
        Success
      </Badge>
      <br /> <br />
      <Badge color="danger" href="#">
        Danger
      </Badge>
      <br /> <br />
      <Badge color="warning" href="#">
        Warning
      </Badge>
      <br /> <br />
      <Badge color="light" href="#">
        Light
      </Badge>
      <br /> <br />
      <Badge color="dark" href="#">
        Dark
      </Badge>
      <br /> <br />
      <Badge color="pending" href="#">
        Pending
      </Badge>
    </>
  );
};

export default LinkBadge;
