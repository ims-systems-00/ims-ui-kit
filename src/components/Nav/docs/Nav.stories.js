import Nav from "../NavBase"
export default {
  title: "components/Nav",
  component: Nav,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = Nav;

Default.args = {
  children: "Click Here",
};
