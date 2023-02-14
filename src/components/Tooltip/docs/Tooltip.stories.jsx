import Tooltip from "../Examples/DefaultTooltip";
export default {
  title: "components/Tooltip",
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component: `
[Bootstrap Tooltip](https://getbootstrap.com/docs/5.3/components/tooltips/)
All our tooltips are customised from the default bootstrap tooltips. Only the customised portions are listed here.
`,
      },
    },
  },
};
export { default as UncontrolledTooltip } from "../Examples/UncontrolledTooltips";
