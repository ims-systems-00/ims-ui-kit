import React from "react";
import ImsCheckBox from "../ImsInputCheck";

const DefaultCheckbox = ({}) => {
  return (
    <>
      <ImsCheckBox label="Default checked" />
      <ImsCheckBox defaultChecked label="Default Checked" />
    </>
  );
};

export default DefaultCheckbox;
