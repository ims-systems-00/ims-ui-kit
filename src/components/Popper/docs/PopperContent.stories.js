import PopperContent from "../PopperContentBase"
export default {
  title: "components/PopperContent",
  component: PopperContent,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = PopperContent;

Default.args = {
  children: "Click Here",
};
