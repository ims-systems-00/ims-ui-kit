import ImsInputText from "../TextInput/ImsFormElements/ImsInputText";

export default {
  title: "components/Forms/ImsFormElements",
  component: ImsInputText,
};
const Template = (args) => <ImsInputText {...args} />;
export const InputText = Template;

InputText.args = {
  label: "Label Text",
  placeholder: "Placeholder Text",
  value: "",
};
