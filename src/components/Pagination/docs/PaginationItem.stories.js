import PaginationItem from "../PaginationItemBase"
export default {
  title: "components/PaginationItem",
  component: PaginationItem,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = PaginationItem;

Default.args = {
  children: "Click Here",
};
