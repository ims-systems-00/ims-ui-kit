import { Meta, StoryFn } from "@storybook/react/*";
import FormFeedback from "../FormFeedbackBase";
import React from "react";
export default {
  title: "components/FormFeedback",
  component: FormFeedback,
  parameters: {
    docs: {
      description: {
        component: `
[Bootstrap FormFeedback](https://getbootstrap.com/docs/5.3/components/alerts/)
All our FormFeedback are customized from the default bootstrap alerts. Only the customized portions are listed here.
        `,
      },
    },
  },
} as Meta<typeof FormFeedback>;

// Define the type for the story
const Template: StoryFn<typeof FormFeedback> = (args: any) => (
  <FormFeedback {...args} />
);

Template.args = {
  children: "Click Here",
};

export { Template as FormFeedback };
