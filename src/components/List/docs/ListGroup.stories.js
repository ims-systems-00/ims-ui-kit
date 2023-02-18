import ListGroup from "../ListGroupBase"
export default {
  title: "components/ListGroup",
  component: ListGroup,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = ListGroup;

Default.args = {
  children: "Click Here",
};
