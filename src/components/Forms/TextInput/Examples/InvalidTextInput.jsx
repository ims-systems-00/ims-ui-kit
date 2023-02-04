import React from "react";
import ImsInputText from "../ImsInputText";

const InvalidTextInput = ({}) => {
  return (
    <ImsInputText
      label="Invalid Label"
      placeholder="Placeholder"
      onChange={(e) => console.log(e.target.value)}
      error
    />
  );
};

export default InvalidTextInput;
