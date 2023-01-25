import React from "react";
import { Button, DropdownToggle } from "reactstrap";

const LightBtn = ({}) => {
  return (
    <>
      <Button color="light">Light Button</Button>
      <br /> <br />
      <Button outline color="light">
        Light Button
      </Button>
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
