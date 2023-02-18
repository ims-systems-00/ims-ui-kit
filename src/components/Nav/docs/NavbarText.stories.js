import NavbarText from "../NavbarTextBase"
export default {
  title: "components/NavbarText",
  component: NavbarText,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = NavbarText;

Default.args = {
  children: "Click Here",
};
