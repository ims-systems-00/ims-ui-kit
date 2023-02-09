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