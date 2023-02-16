import InputGroup from "components/Forms/TextInput/InputGroupBase";
import InputGroupText from "components/Forms/TextInput/InputGroupTextBase";
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
