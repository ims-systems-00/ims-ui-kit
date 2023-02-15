import NavbarToggler from "../NavbarTogglerBase"
export default {
  title: "components/NavbarToggler",
  component: NavbarToggler,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = NavbarToggler;

Default.args = {
  children: "Toggler text here",
};
