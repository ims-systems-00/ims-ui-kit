import Example from "../Example";
export default {
  title: "components/Card",
  component: Example,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = Example;

Default.args = {
  children: "Click Here",
};
