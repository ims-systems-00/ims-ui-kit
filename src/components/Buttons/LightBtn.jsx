import React from "react";
import { Button } from "reactstrap";

const LightBtn = ({}) => {
  return (
    <>
      <Button color="light">Light Button</Button>
    </>
  );
};

export default LightBtn;
LightBtn.parameters = {
  docs: {
    description: {
      story: `
It is Light button
`,
    },
  },
};
