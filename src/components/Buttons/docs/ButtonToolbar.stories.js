import ButtonToolbar from "../ButtonToolbarBase"
export default {
  title: "components/ButtonToolbar",
  component: ButtonToolbar,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = ButtonToolbar;

Default.args = {
  children: "Click Here",
};
