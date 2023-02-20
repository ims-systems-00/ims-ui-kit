import CardDeck from "../CardDeckBase"
export default {
  title: "components/CardDeck",
  component: CardDeck,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = CardDeck;

Default.args = {
  children: "Click Here",
};
