import ImsTextInput from "../ImsFormElements/ImsInputText";

export default {
  title: "components/Forms/ImsFormElements",
  component: ImsTextInput,
};
const Template = (args) => <ImsInputText {...args} />;
export const ImsInputText = Template;

ImsInputText.args = {
  label: "Label Text",
  placeholder: "Placeholder Text",
  value: "",
};
