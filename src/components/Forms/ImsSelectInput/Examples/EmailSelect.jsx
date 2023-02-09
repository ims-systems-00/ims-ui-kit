import React from "react";
import ImsCreatableSelect from "../CreatableSelectBase";
import options from "./options.js";

const EmailSelect = ({}) => {
  return (
    <>
      <ImsCreatableSelect
        isMulti
        options={options}
        placeholder="Creatable Email Select"
        email
      />
    </>
  );
};
export default EmailSelect;
