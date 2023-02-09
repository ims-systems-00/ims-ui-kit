import React from "react";
import options from "./options.js";
import ImsSelect from "../ReactSelectBase";
import ImsInputText from "../../TextInput/ImsInputText";

const SelectSizes = ({}) => {
  return (
    <>
      <ImsSelect
        isMulti
        options={options}
        size="lg"
        placeholder="Large Select"
      />
      <br /> <br />
      <ImsSelect isMulti options={options} placeholder="Regular Select" />
      <br /> <br />
      <ImsSelect
        isMulti
        options={options}
        size="sm"
        placeholder="Small Select"
      />
      <br /> <br />
      <ImsInputText placeholder="Regular Text Input" />
    </>
  );
};

export default SelectSizes;
