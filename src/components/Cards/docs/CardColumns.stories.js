import CardColumns from "../CardColumnsBase"
export default {
  title: "components/CardColumns",
  component: CardColumns,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = CardColumns;

Default.args = {
  children: "Click Here",
};
