import CardLink from "../CardLinkBase"
export default {
  title: "components/CardLink",
  component: CardLink,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = CardLink;

Default.args = {
  children: "Click Here",
};
