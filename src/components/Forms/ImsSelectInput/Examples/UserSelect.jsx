import ImsCreatableSelect from "../CreatableSelectBase";
import { disableValidEmail } from "../utility.js";
import options from "./options.js";

const UserSelect = ({}) => {
  return (
    <>
      <ImsCreatableSelect
        isMulti
        options={options}
        placeholder="Creatable User Select"
        leftPhrase="Add this user"
        isOptionDisabled={(option) => disableValidEmail(option)}
      />
    </>
  );
};
export default UserSelect;
