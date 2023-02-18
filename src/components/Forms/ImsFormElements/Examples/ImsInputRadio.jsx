import React, { useState } from "react";
import ImsInputRadioBase from "../ImsInputRadio";

const ImsInputRadio = () => {
  const [radio, setRadio] = useState("Option 2");
  return (
    <>
      <h2>Radio Input</h2>
      <ImsInputRadioBase
        label="Label Text"
        name="radio"
        values={["Option 1", "Option 2", "Option 3"]}
        onChange={(e) => {
          setRadio(e.currentTarget.value);
        }}
        defaultChecked={radio}
      />
    </>
  );
};

export default ImsInputRadio;
