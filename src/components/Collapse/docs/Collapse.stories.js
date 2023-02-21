import Collapse from "../CollapseBase"
export default {
  title: "components/Collapse",
  component: Collapse,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = Collapse;

Default.args = {
  children: "Click Here",
};
