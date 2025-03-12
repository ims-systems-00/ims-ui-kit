import { Meta, StoryFn } from "@storybook/react/*";
import Form from "../FormBase";
import React from "react";

export default {
  title: "components/Form",
  component: Form,
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
} as Meta<typeof Form>;

// Define the type for the story
const Template: StoryFn<typeof Form> = (args: any) => <Form {...args} />;

Template.args = {
  children: "Click Here",
};

export { Template as Form };
