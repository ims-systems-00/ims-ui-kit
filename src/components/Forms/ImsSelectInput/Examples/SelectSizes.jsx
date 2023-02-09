import React from "react";
import options from "./options.js";
import ImsSelect from "../ReactSelectBase";

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
    </>
  );
};

export default SelectSizes;
