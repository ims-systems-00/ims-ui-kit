import { Meta, StoryFn } from "@storybook/react/*";
import UncontrolledPopover from "../UncontrolledPopoverBase";
import React from "react";

export default {
  title: "components/UncontrolledPopover",
  component: UncontrolledPopover,
  parameters: {
    docs: {
      description: {
        component: `
[Bootstrap UncontrolledPopover](https://getbootstrap.com/docs/5.3/components/alerts/)
All our UncontrolledPopover are customized from the default bootstrap alerts. Only the customized portions are listed here.
        `,
      },
    },
  },
} as Meta<typeof UncontrolledPopover>;

// Define the type for the story
const Template: StoryFn<typeof UncontrolledPopover> = (args: any) => (
  <UncontrolledPopover {...args} />
);

Template.args = {
  children: "Click Here",
};

export { Template as UncontrolledPopover };
