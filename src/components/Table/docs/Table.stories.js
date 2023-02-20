import Table from "../TableBase"
export default {
  title: "components/Table",
  component: Table,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = Table;

Default.args = {
  children: "Click Here",
};
