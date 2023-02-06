import React from "react";
import ImsInputText from "../ImsInputText";

const TextInputWithIcon = ({}) => {
  return (
    <>
      <ImsInputText
        label="Regular Label"
        placeholder="Placeholder"
        onChange={(e) => console.log(e.target.value)}
        leftIcon="fa-solid fa-user"
        rightIcon="fa-solid fa-lock"
      />
      <ImsInputText
        label="Regular Label"
        placeholder="Placeholder"
        onChange={(e) => console.log(e.target.value)}
        leftIcon="fa-solid fa-user"
        leftIconStyle="text-primary"
        rightIcon="fa-solid fa-lock"
        rightIconStyle="text-success"
      />
    </>
  );
};

export default TextInputWithIcon;
