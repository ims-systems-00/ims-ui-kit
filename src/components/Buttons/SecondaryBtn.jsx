import React from "react";
import { Button } from "reactstrap";

const SecondaryBtn = ({}) => {
  return (
    <>
      <Button>Secondary Button</Button>
      <br /> <br />
      <Button outline>Secondary Button</Button>
    </>
  );
};

export default SecondaryBtn;
SecondaryBtn.parameters = {
  docs: {
    description: {
      story: `
It is secondary button
`,
    },
  },
};
