import React from "react";
import Button from "../ButtonBase";
import ButtonToggle from "../ButtonToggleBase";

const BtnToggle = ({}) => {
  return (
    <>
      <ButtonToggle>Focussed Toggle</ButtonToggle>
      <br /> <br />
      <ButtonToggle defaultValue>DeFocussed Toggle</ButtonToggle>
    </>
  );
};

export default BtnToggle;
