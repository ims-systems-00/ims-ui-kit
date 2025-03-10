import type { Meta, StoryFn } from "@storybook/react";
import React from "react";
import Toast from "../Examples/DefaultToast";

export default {
  title: "components/Toast",
  component: Toast,
  parameters: {
    docs: {
      description: {
        component: `
[Bootstrap Toast](https://getbootstrap.com/docs/5.3/components/toasts/)
All our toasts are customized from the default bootstrap toasts. Only the customized portions are listed here.
        `,
      },
    },
  },
} as Meta<typeof Toast>;

// Define the type for the story
const Template: StoryFn<typeof Toast> = (args: any) => <Toast {...args} />;

Template.args = {};

export { Template as Toast };
