import FormFeedback from "../FormFeedbackBase"
export default {
  title: "components/FormFeedback",
  component: FormFeedback,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = FormFeedback;

Default.args = {
  children: "Click Here",
};
