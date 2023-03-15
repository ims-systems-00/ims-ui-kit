import InputGroup from "../../TextInput/InputGroupBase";
import InputGroupText from "../../TextInput/InputGroupTextBase";
import ReactSelect from "../ReactSelectBase";
import options from "./options.js";

const SelectWithIcon = () => {
  return (
    <InputGroup>
      <InputGroupText>
        <i className="fa-solid fa-home" />
      </InputGroupText>
      <ReactSelect options={options} placeholder="Select with icon" />
    </InputGroup>
  );
};

export default SelectWithIcon;
