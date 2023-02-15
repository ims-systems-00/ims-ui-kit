import Navbar from "../NavbarBase"
export default {
  title: "components/Navbar",
  component: Navbar,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = Navbar;

Default.args = {
  children: "Click Here",
};
