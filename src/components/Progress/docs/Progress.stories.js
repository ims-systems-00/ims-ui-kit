import Progress from "../ProgressBase";
export default {
  title: "components/Progress",
  component: Progress,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = Progress;

Default.args = {
  children: "Click Here",
};
export { default as RadialProgress } from "../Example/RadialProgressExample";
