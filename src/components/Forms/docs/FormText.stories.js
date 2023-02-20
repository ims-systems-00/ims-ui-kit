import FormText from "../FormTextBase"
export default {
  title: "components/FormText",
  component: FormText,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = FormText;

Default.args = {
  children: "Click Here",
};
