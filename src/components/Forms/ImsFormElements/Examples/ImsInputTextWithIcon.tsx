import React from "react";
import ImsInputTextWithIconBase from "../ImsInputTextWithIcon";

const ImsInputTextWithIcon = ({}) => {
  return (
    <>
      <h2>Text Input</h2>
      <ImsInputTextWithIconBase
        label="Label Text"
        icon="fa-solid fa-home"
        onChange={(e) => console.log(e)}
      />
      <br /> <br />
      <h2>Select Input</h2>
      <ImsInputTextWithIconBase
        label="Label Text"
        icon="fa-solid fa-home"
        onChange={(e) => console.log(e)}
        options={[
          { value: "1", placeHolder: "Option 1" },
          { value: "2", placeHolder: "Option 2" },
          { value: "3", placeHolder: "Option 3" },
        ]}
        defaultOpt="Select Option"
        type="Select"
      />
    </>
  );
};

export default ImsInputTextWithIcon;
