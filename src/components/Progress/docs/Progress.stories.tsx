import Progress from "../ProgressBase";
import type { Meta, StoryFn } from "@storybook/react";
import React from "react";

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
} as Meta<typeof Progress>;

// Define the type for the story
const Template: StoryFn<typeof Progress> = (args: any) => (
  <Progress {...args} />
);

Template.args = {
  children: "Click Here",
};

export { Template as Progress };

export { default as RadialProgress } from "../Example/RadialProgressExample";
