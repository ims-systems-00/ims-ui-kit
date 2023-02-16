import React from "react";
import ReactSelect from "../ReactSelectBase";
import InputGroup from "components/Forms/TextInput/InputGroupBase";
import InputGroupText from "components/Forms/TextInput/InputGroupTextBase";
import options from "./options.js";
import InputBase from "components/Forms/TextInput/InputBase";

const SelectWithIcon = () => {
  return (
    <InputGroup>
      <InputGroupText >
        <i className="fa-solid fa-home" />
      </InputGroupText>
      <ReactSelect
      size="lg"
       options={options} placeholder="Select with icon" />
    </InputGroup>
  );
};

export default SelectWithIcon;
