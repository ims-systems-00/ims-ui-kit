import ReactSelect from "../ImsSelectInput/ReactSelectBase";

export default {
  title: "components/Forms/ReactSelect",
  component: ReactSelect,
};
const Template = (args) => <ReactSelect {...args} />;
export const ImsSelect = Template;
ImsSelect.args = {
  defaultValue: { value: "chocolate", label: "Chocolate" },
  options: [
    { value: "all", label: "Select all" },
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ],
  isLoading: false,
  isDisabled: false,
  isClearable: true,
  isSearchable: true,
  isMulti: true,
  isRtl: false,
  // isOptionDisabled: false,
  isOptionSelected: false,
  isFocused: false,
  isMenuOpen: false,
  isHidden: false,
  isInvalid: false,
  isRequired: false,
  isReadOnly: false,
  size: "",
};

export { default as SelectSizes } from "../ImsSelectInput/Examples/SelectSizes";
export { default as CreatableSelect } from "../ImsSelectInput/Examples/CreatableSelect";
export { default as EmailSelect } from "../ImsSelectInput/Examples/EmailSelect";
export { default as UserSelect } from "../ImsSelectInput/Examples/UserSelect";
export { default as SearchSelect } from "../ImsSelectInput/Examples/SearchSelect";
export { default as SelectWithIcon } from "../ImsSelectInput/Examples/SelectWithIcon";
