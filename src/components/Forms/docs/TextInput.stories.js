import ImsInputText from "../TextInput/ImsInputText";

export default {
  title: "components/Forms/TextInput",
  component: ImsInputText,
};
const Template = (args) => <ImsInputText {...args} />;
export const InputText = Template;

InputText.args = {
  label: "Label Text",
  placeholder: "Placeholder Text",
  value: "",
};

export { default as SimpleInputText } from "../TextInput/Examples/SimpleInputText";
export { default as TextInputWithIcon } from "../TextInput/Examples/TextInputWithIcon";
export { default as ValidTextInput } from "../TextInput/Examples/ValidTextInput";
export { default as InvalidTextInput } from "../TextInput/Examples/InvalidTextInput";
