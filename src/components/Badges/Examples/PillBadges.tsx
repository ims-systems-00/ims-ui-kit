import React from "react";
import Badge from "../BadgeBase";

const PillBadges = ({}) => {
  return (
    <>
      <Badge color="primary" pill>
        Primary Pill
      </Badge>
      <br /> <br />
      <Badge color="info" pill>
        Info Pill
      </Badge>
      <br /> <br />
      <Badge pill>Default Pill</Badge>
      <br /> <br />
      <Badge color="secondary" pill>
        Secondary Pill
      </Badge>
      <br /> <br />
      <Badge color="success" pill>
        Success Pill
      </Badge>
      <br /> <br />
      <Badge color="danger" pill>
        Danger Pill
      </Badge>
      <br /> <br />
      <Badge color="warning" pill>
        Warning Pill
      </Badge>
      <br /> <br />
      <Badge color="light" pill>
        Light Pill
      </Badge>
      <br /> <br />
      <Badge color="dark" pill>
        Dark Pill
      </Badge>
      <br /> <br />
      <Badge color="pending" pill>
        Pending Pill
      </Badge>
    </>
  );
};

export default PillBadges;
