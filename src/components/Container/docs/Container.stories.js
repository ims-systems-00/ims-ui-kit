import Container from "../ContainerBase"
export default {
  title: "components/Container",
  component: Container,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = Container;

Default.args = {
  children: "Click Here",
};
