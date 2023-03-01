import ImsSimpleTable from "../ImsSimpleTable";
import { data } from "../data.js";
export default {
  title: "components/Table",
  component: ImsSimpleTable,
  parameters: {
    docs: {
      description: {
        component: `This component is built for quick rendering of simple tablular data the data. This the simplest version of iMS Systems tables`,
      },
    },
  },
};

const Template = (args) => <ImsSimpleTable {...args} />;
export const Default = Template.bind({});
Default.args = {
  thead: data.thead,
  tbody: data.tbody,
};
export { default as TableInaCard } from "../TableInaCard";
