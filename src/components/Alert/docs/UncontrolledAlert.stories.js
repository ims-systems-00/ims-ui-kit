import UncontrolledAlert from "../UncontrolledAlertBase"
export default {
  title: "components/UncontrolledAlert",
  component: UncontrolledAlert,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = UncontrolledAlert;

Default.args = {
  children: "Click Here",
};
