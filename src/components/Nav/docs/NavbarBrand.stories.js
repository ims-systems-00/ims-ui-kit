import NavbarBrand from "../NavbarBrandBase"
export default {
  title: "components/NavbarBrand",
  component: NavbarBrand,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = NavbarBrand;

Default.args = {
  children: "Click Here",
};
