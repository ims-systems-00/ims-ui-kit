import React from "react";
import Button from "../Buttons/BtnBase";

const IconBtn = ({}) => {
  return (
    <>
      <Button sicon="fa-solid fa-house">Left Icon Button</Button>
      <br /> <br />
      <Button
        sicon="tim-icons icon-trash-simple"
        eicon="tim-icons icon-trash-simple"
      >
        Icon Button
      </Button>
      <br /> <br />
      <Button eicon="tim-icons icon-trash-simple">Right Icon Button</Button>
      <br /> <br />
      <Button sicon="tim-icons icon-trash-simple" outline>
        Left Icon Button
      </Button>
      <br /> <br />
      <Button
        sicon="tim-icons icon-trash-simple"
        eicon="tim-icons icon-trash-simple"
        outline
      >
        Icon Button
      </Button>
      <br /> <br />
      <Button eicon="tim-icons icon-trash-simple" outline>
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
