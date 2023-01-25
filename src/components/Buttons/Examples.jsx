import React from "react";
import { Button } from "reactstrap";
import DarkBtn from "./DarkBtn";
import LightBtn from "./LightBtn";
import LinkBtn from "./LinkBtn";
import PrimaryBtn from "./PrimaryBtn";
import SecondaryBtn from "./SecondaryBtn";

const Examples = ({}) => {
  return (
    <>
      <PrimaryBtn />
      <br /> <br />
      <SecondaryBtn />
      <br /> <br />
      <LightBtn />
      <br /> <br />
      <DarkBtn />
      <br /> <br />
      <LinkBtn />
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
