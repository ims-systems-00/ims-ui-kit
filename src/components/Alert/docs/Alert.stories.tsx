import type { Meta, StoryFn } from "@storybook/react";
import Alert from "../Examples/DefaultAlert";
import React from "react";

// Define the type for the component meta
export default {
  title: "components/Alert",
  component: Alert,
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
} as Meta<typeof Alert>;

// Define the type for the story
const Template: StoryFn<typeof Alert> = (args: any) => <Alert {...args} />;

Template.args = {};

export { Template as Alert };

export { default as UncontrolledAlert } from "../Examples/UncontrolledAlerts";
