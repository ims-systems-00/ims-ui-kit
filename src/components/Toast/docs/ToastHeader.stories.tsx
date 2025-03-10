import type { Meta, StoryFn } from "@storybook/react";
import React from "react";
import ToastHeader from "../ToastHeaderBase";

export default {
  title: "components/ToastHeader",
  component: ToastHeader,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof ToastHeader>;

// Define the type for the story
const Template: StoryFn<typeof ToastHeader> = (args: any) => (
  <ToastHeader {...args} />
);

Template.args = {
  children: "Click Here",
};

export { Template as ToastHeader };
