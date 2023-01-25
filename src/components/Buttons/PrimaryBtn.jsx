import React from "react";
import { Button } from "reactstrap";

const PrimaryBtn = ({}) => {
  return (
    <>
      <Button color="primary">Primary Button</Button>
      <br /> <br />
      <Button outline color="primary">
        Primary Button
      </Button>
    </>
  );
};

export default PrimaryBtn;
PrimaryBtn.parameters = {
  docs: {
    description: {
      story: `
It is primary button
`,
    },
  },
};
