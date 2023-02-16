import ToastBody from "../ToastBodyBase"
export default {
  title: "components/ToastBody",
  component: ToastBody,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = ToastBody;

Default.args = {
  children: "Click Here",
};
