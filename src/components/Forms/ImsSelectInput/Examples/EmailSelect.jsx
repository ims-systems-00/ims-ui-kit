import React from "react";
import ImsCreatableSelect from "../CreatableSelectBase";
import options from "./options.js";
import { disableInvalidEmail } from "../utility";

const EmailSelect = ({}) => {
  return (
    <>
      <ImsCreatableSelect
        isMulti
        options={options}
        placeholder="Creatable Email Select"
        isOptionDisabled={(option) => disableInvalidEmail(option)}
      />
    </>
  );
};
export default EmailSelect;
