import NavLink from "../NavLinkBase"
export default {
  title: "components/NavLink",
  component: NavLink,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = NavLink;

Default.args = {
  children: "Click Here",
};
