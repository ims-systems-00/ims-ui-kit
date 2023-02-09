import React from "react";
import ImsCreatableSelect from "../CreatableSelectBase";
import options from "./options.js";

const UserSelect = ({}) => {
  return (
    <>
      <ImsCreatableSelect
        isMulti
        options={options}
        placeholder="Creatable User Select"
        word="Add this user"
        user
      />
    </>
  );
};
export default UserSelect;
