import { Meta, StoryFn } from "@storybook/react/*";
import UncontrolledCollapse from "../Examples/DefaultCollapse";
import React from "react";

export default {
  title: "components/UncontrolledCollapse",
  component: UncontrolledCollapse,
  parameters: {
    docs: {
      description: {
        component: `
[Bootstrap Collapse](https://getbootstrap.com/docs/5.3/components/collapse/)
All our collapse are customized from the default bootstrap collapse. Only the customized portions are listed here.
`,
      },
    },
  },
} as Meta<typeof UncontrolledCollapse>;

// Define the type for the story
const Template: StoryFn<typeof UncontrolledCollapse> = (args: any) => (
  <UncontrolledCollapse {...args} />
);

Template.args = {};

export { Template as Alert };

export { default as UncontrolledCollapse } from "../Examples/UncontrolledCollapses";
