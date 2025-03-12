import { Meta, StoryFn } from "@storybook/react/*";
import FormGroup from "../FormGroupBase";
import React from "react";
export default {
  title: "components/FormGroup",
  component: FormGroup,
  parameters: {
    docs: {
      description: {
        component: `
[Bootstrap FormGroup](https://getbootstrap.com/docs/5.3/components/alerts/)
All our FormGroup are customized from the default bootstrap alerts. Only the customized portions are listed here.
        `,
      },
    },
  },
} as Meta<typeof FormGroup>;

// Define the type for the story
const Template: StoryFn<typeof FormGroup> = (args: any) => (
  <FormGroup {...args} />
);

Template.args = {
  children: "Click Here",
};

export { Template as FormGroup };
