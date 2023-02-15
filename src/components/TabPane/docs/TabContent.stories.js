import TabContent from "../TabContentBase"
export default {
  title: "components/TabContent",
  component: TabContent,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = TabContent;

Default.args = {
  children: "Click Here",
};
