import React from "react";
import { Button } from "reactstrap";
import DarkBtn from "./DarkBtn";
import LightBtn from "./LightBtn";
import PrimaryBtn from "./PrimaryBtn";
import SecondaryBtn from "./SecondaryBtn";

const Examples = ({}) => {
  return (
    <>
      <PrimaryBtn />
      <SecondaryBtn />
      <LightBtn />
      <DarkBtn />
    </>
  );
};

export default Examples;
Examples.parameters = {
  docs: {
    description: {
      story: `
It is examples of buttons
`,
    },
  },
};
