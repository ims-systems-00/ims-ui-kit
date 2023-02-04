import React from "react";
import ImsInputText from "../ImsInputText";

const InvalidTextInput = ({}) => {
  return (
    <ImsInputText
      label="Invalid Label"
      placeholder="Placeholder"
      onChange={(e) => console.log(e.target.value)}
      error="This is an error"
    />
  );
};

export default InvalidTextInput;
