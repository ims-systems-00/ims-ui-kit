import ToastHeader from "../ToastHeaderBase"
export default {
  title: "components/ToastHeader",
  component: ToastHeader,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = ToastHeader;

Default.args = {
  children: "Click Here",
};
