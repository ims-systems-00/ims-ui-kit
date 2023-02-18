import ImsInputText from "../ImsFormElements/ImsInputText";

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

export { default as DefaultInputText } from "../TextInput/Examples/DefaultInputText";
export { default as GroupInputText } from "../TextInput/Examples/GroupInputText";
export { default as InvalidTextInput } from "../TextInput/Examples/InvalidTextInput";
export { default as SizeVariantsTextInput } from "../TextInput/Examples/TextInputSizes.jsx";

