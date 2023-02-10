import ImsCreatableSelect from "../CreatableSelectBase";
import { disableInvalidEmail } from "../utility";
import options from "./options.js";

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
