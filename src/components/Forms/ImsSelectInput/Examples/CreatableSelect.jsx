import ImsCreatableSelect from "../CreatableSelectBase";
import options from "./options.js";

const CreatableSelect = ({}) => {
  return (
    <>
      <ImsCreatableSelect
        isMulti
        options={options}
        placeholder="Creatable Select"
      />
    </>
  );
};
export default CreatableSelect;
