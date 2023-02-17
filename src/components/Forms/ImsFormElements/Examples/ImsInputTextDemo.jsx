import React from "react";
import ImsInputText from "../ImsInputText";

const ImsInputTextDemo = ({}) => {
  return (
    <>
      <ImsInputText
        label="Label Text"
        placeholder="Placeholder Text"
        onChange={(e) => console.log(e)}
      />
    </>
  );
};

export default ImsInputTextDemo;
