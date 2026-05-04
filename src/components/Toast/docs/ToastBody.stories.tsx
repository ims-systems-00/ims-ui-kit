import type { Meta, StoryFn } from "@storybook/react";
import ToastBody from "../ToastBodyBase";
import React from "react";
export default {
  title: "components/ToastBody",
  component: ToastBody,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof ToastBody>;

// Define the type for the story
const Template: StoryFn<typeof ToastBody> = (args: any) => (
  <ToastBody {...args} />
);

Template.args = {
  children: "Click Here",
};

export { Template as ToastBody };
