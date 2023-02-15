import CardHeader from "../CardHeaderBase"
export default {
  title: "components/CardHeader",
  component: CardHeader,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = CardHeader;

Default.args = {
  children: "Click Here",
};
