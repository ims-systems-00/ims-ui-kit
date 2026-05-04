import { Meta, StoryFn } from "@storybook/react/*";
import FormText from "../FormTextBase";
import React from "react";
export default {
  title: "components/FormText",
  component: FormText,
  parameters: {
    docs: {
      description: {
        component: `
[Bootstrap FormText](https://getbootstrap.com/docs/5.3/components/alerts/)
All our FormText are customized from the default bootstrap alerts. Only the customized portions are listed here.
        `,
      },
    },
  },
} as Meta<typeof FormText>;

// Define the type for the story
const Template: StoryFn<typeof FormText> = (args: any) => (
  <FormText {...args} />
);

Template.args = {
  children: "Click Here",
};

export { Template as FormText };
