import Form from "../FormBase"
export default {
  title: "components/Form",
  component: Form,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = Form;

Default.args = {
  children: "Click Here",
};
