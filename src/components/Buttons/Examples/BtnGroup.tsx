import React from "react";
import Button from "../ButtonBase";
import ButtonGroup from "../ButtonGroupBase";

const BtnGroup = ({}) => {
  return (
    <>
      <ButtonGroup>
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
      </ButtonGroup>
    </>
  );
};

export default BtnGroup;
