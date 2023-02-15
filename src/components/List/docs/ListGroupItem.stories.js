import ListGroupItem from "../ListGroupItemBase"
export default {
  title: "components/ListGroupItem",
  component: ListGroupItem,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = ListGroupItem;

Default.args = {
  children: "Click Here",
};
