import DarkBtn from "./DarkBtn";
import LinkBtn from "./LightBtn";
import PrimaryBtn from "./PrimaryBtn";
import SecondaryBtn from "./SecondaryBtn";
import React from "react";

const Examples = ({}) => {
  return (
    <>
      <PrimaryBtn />
      <br /> <br />
      <SecondaryBtn />
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
