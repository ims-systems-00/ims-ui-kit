import CardFooter from "../CardFooterBase"
export default {
  title: "components/CardFooter",
  component: CardFooter,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = CardFooter;

Default.args = {
  children: "Click Here",
};
