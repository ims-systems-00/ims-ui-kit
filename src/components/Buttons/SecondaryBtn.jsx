import React from "react";
import { Button } from "reactstrap";

const SecondaryBtn = ({}) => {
  return (
    <>
      <Button color="secondary">Secondary Button</Button>
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
