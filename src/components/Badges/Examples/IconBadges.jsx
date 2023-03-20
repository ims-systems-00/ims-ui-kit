import React from "react";
import Badge from "../BadgeBase";

const IconBadges = ({}) => {
  return (
    <>
      <Badge fade="primary">
        {" "}
        <i className="tim-icons icon-paper me-1" /> Primary
      </Badge>
      <br /> <br />
      <Badge fade="info">
        {" "}
        <i className="tim-icons icon-paper me-1" />
        Info
      </Badge>
      <br /> <br />
      <Badge fade="secondary">
        {" "}
        <i className="tim-icons icon-paper me-1" />
        Secondary
      </Badge>
      <br /> <br />
      <Badge fade="success">
        {" "}
        <i className="tim-icons icon-paper me-1" />
        Success
      </Badge>
      <br /> <br />
      <Badge fade="danger">
        {" "}
        <i className="tim-icons icon-paper me-1" />
        Danger
      </Badge>
      <br /> <br />
      <Badge fade="warning">
        {" "}
        <i className="tim-icons icon-paper me-1" />
        Warning
      </Badge>
      <br /> <br />
      <Badge fade="light">
        {" "}
        <i className="tim-icons icon-paper me-1" />
        Light
      </Badge>
      <br /> <br />
      <Badge fade="dark">
        {" "}
        <i className="tim-icons icon-paper me-1" />
        Dark
      </Badge>
      <br /> <br />
      <Badge fade="pending">
        {" "}
        <i className="tim-icons icon-paper me-1" />
        Pending
      </Badge>
    </>
  );
};

export default IconBadges;
