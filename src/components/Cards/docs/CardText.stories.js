import CardText from "../CardTextBase"
export default {
  title: "components/CardText",
  component: CardText,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = CardText;

Default.args = {
  children: "Click Here",
};
