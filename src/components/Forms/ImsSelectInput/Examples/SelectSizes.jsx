import ImsSelect from "../ReactSelectBase";
import options from "./options.js";

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
    </>
  );
};

export default SelectSizes;
