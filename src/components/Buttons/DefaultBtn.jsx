
import React from "react";
import { Button } from "reactstrap";

const DefaultBtn = ({}) => {
  return (
    <>
      <Button color="light">Default Button</Button>
    </>
  );
};

export default DefaultBtn;
DefaultBtn.parameters = {
  docs: {
    description: {
      story: `
It is secondary button
`,
    },
  },
};
