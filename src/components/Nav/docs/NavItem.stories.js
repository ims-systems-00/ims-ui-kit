import NavItem from "../NavItemBase"
export default {
  title: "components/NavItem",
  component: NavItem,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = NavItem;

Default.args = {
  children: "Click Here",
};
