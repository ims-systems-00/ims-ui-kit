import type { Meta, StoryFn } from "@storybook/react";
import React from "react";
import SingleActivity from "../Examples/SingleActivity";
export default {
  title: "components/Activity",
  component: SingleActivity,
  parameters: {
    docs: {
      description: {
        component: `
[Bootstrap Text](https://getbootstrap.com/docs/5.3/utilities/text/)
All our text are customized from the default bootstrap texts. Only the customized portions are listed here.
        `,
      },
    },
  },
} as Meta<typeof SingleActivity>;

// Define the type for the story
const Template: StoryFn<typeof SingleActivity> = (args: any) => (
  <SingleActivity {...args} />
);

Template.args = {
  children: "Click Here",
};

export { Template as SingleActivity };
