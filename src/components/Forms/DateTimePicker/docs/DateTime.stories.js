import DateTime from "../DateTimeBase";

export default {
  title: "components/Forms/DateTimePicker",
  component: <DateTime />,
};
const Template = (args) => <DateTime {...args} />;
export const DateTimePicker = Template;
DateTimePicker.args = {};

export { default as DefaultDateTime } from "../Examples/DefaultDateTime";
