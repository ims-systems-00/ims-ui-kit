import DefaultTooltip from "../Examples/DefaultTooltip";
import UncontrolledTooltipBase from "../UncontrolledTooltipBase";
export default {
  title: "components/Tooltip",
  component: DefaultTooltip,
  parameters: {
    docs: {
      description: {
        component: `
[Bootstrap Dropdown](https://getbootstrap.com/docs/5.3/components/dropdowns/#overview)
All our dropdowns are customised from the default bootstrap dropdowns. Only the customised portions are listed here.
        `,
      },
    },
  },
};
export const Tooltip = (args) => <DefaultTooltip {...args} />;
Tooltip.args = {};

export { default as UncontrolledTooltip } from "../Examples/UncontrolledTooltips";

