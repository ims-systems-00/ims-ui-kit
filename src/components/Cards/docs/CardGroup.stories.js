import CardGroup from "../CardBase"
export default {
  title: "components/CardGroup",
  component: CardGroup,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = CardGroup;

Default.args = {
  children: "Click Here",
};
