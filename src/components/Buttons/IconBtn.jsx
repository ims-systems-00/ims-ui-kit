import React from "react";
import Button from "../Buttons/BtnBase";

const IconBtn = ({}) => {
  return (
    <>
      <Button leftIcon="fa-solid fa-house">Left Icon Button</Button>
      <br /> <br />
      <Button
        leftIcon="fa-solid fa-house"
        rightIcon="fa-solid fa-house"
      >
        Icon Button
      </Button>
      <br /> <br />
      <Button rightIcon="fa-solid fa-house">Right Icon Button</Button>
      <br /> <br />
      <Button leftIcon="fa-solid fa-house" outline>
        Left Icon Button
      </Button>
      <br /> <br />
      <Button
        leftIcon="fa-solid fa-house"
        rightIcon="fa-solid fa-house"
        outline
      >
        Icon Button
      </Button>
      <br /> <br />
      <Button rightIcon="fa-solid fa-house" outline>
        Right Icon Button
      </Button>
    </>
  );
};

export default IconBtn;
IconBtn.parameters = {
  docs: {
    description: {
      story: `
It is icon button
`,
    },
  },
};
