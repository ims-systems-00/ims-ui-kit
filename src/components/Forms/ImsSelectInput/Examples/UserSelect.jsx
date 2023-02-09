import React from "react";
import ImsCreatableSelect from "../CreatableSelectBase";
import options from "./options.js";
import { disableValidEmail } from "../utility.js";

const UserSelect = ({}) => {
  return (
    <>
      <ImsCreatableSelect
        isMulti
        options={options}
        placeholder="Creatable User Select"
        word="Add this user"
        isOptionDisabled={(option) => disableValidEmail(option)}
      />
    </>
  );
};
export default UserSelect;
