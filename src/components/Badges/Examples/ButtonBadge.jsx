import React from "react";
import Button from "../../Buttons/BtnBase";
import Badge from "../BadgeBase";

const ButtonBadge = ({}) => {
  return (
    <>
      <Button>
        Notifications <Badge color="pending">4</Badge>
      </Button>
    </>
  );
};

export default ButtonBadge;
