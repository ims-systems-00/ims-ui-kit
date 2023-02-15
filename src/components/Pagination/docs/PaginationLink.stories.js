import PaginationLink from "../PaginationLinkBase"
export default {
  title: "components/PaginationLink",
  component: PaginationLink,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = PaginationLink;

Default.args = {
  children: "Click Here",
};
