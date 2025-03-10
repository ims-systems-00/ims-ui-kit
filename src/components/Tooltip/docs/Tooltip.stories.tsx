import type { Meta, StoryFn } from "@storybook/react";

import DefaultTooltip from "../Examples/DefaultTooltip";
import UncontrolledTooltipBase from "../UncontrolledTooltipBase";
import React from "react";
export default {
  title: "components/Tooltip",
  component: DefaultTooltip,
  parameters: {
    docs: {
      description: {
        component: `
[Bootstrap Dropdown](https://getbootstrap.com/docs/5.3/components/dropdowns/#overview)
All our dropdowns are customized from the default bootstrap dropdowns. Only the customized portions are listed here.
        `,
      },
    },
  },
} as Meta<typeof DefaultTooltip>;

// Define the type for the story
const Template: StoryFn<typeof DefaultTooltip> = (args: any) => (
  <DefaultTooltip {...args} />
);

Template.args = {};

export { Template as DefaultTooltip };

export { default as UncontrolledTooltip } from "../Examples/UncontrolledTooltips";
