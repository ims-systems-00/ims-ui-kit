import Badge from "../BadgeBase"
export default {
  title: "components/Badge",
  component: Badge,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = Badge;

Default.args = {
  children: "Click Here",
};
