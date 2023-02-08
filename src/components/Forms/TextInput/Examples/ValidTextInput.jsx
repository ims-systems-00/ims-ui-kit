import React from "react";
import ImsInputText from "../ImsInputText";

const ValidTextInput = ({}) => {
  return (
    <ImsInputText
      label="Valid Label"
      placeholder="Placeholder"
      onChange={(e) => console.log(e.target.value)}
      valid
    />
  );
};

export default ValidTextInput;
