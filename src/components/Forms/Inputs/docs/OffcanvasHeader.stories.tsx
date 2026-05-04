import { Meta, StoryFn } from "@storybook/react/*";
import OffcanvasHeader from "../OffcanvasHeaderBase";
import React from "react";
export default {
  title: "components/OffcanvasHeader",
  component: OffcanvasHeader,
  parameters: {
    docs: {
      description: {
        component: `
[Bootstrap Alert](https://getbootstrap.com/docs/5.3/components/alerts/)
All our alerts are customized from the default bootstrap alerts. Only the customized portions are listed here.
        `,
      },
    },
  },
} as Meta<typeof OffcanvasHeader>;

// Define the type for the story
const Template: StoryFn<typeof OffcanvasHeader> = (args: any) => <OffcanvasHeader {...args} />;

Template.args = {
  children: "Click Here",
};

export { Template as OffcanvasHeader };
