import Card from "../CardBase";
export default {
  title: "components/Card",
  component: Card,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = Card;

Default.args = {
  children: "Click Here",
};

export { default as DashboardCards } from "../Examples/DashboardCards";
