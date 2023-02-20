import CardTitle from "../CardTitleBase"
export default {
  title: "components/CardTitle",
  component: CardTitle,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = CardTitle;

Default.args = {
  children: "Click Here",
};
