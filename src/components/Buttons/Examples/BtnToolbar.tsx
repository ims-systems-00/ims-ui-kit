import React from "react";
import ButtonGroup from "../ButtonGroupBase";
import Button from "../ButtonBase";
import ButtonToolbar from "../ButtonToolbarBase";

const BtnToolbar = ({}) => {
  return (
    <>
      <ButtonToolbar>
        <ButtonGroup className="me-2">
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>4</Button>
        </ButtonGroup>
        <ButtonGroup className="me-2">
          <Button>5</Button>
          <Button>6</Button>
          <Button>7</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button>8</Button>
        </ButtonGroup>
      </ButtonToolbar>
    </>
  );
};

export default BtnToolbar;
