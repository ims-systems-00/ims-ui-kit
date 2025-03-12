import { Meta, StoryFn } from "@storybook/react/*";
import Label from "../LabelBase";
import React from "react";

export default {
  title: "components/Label",
  component: Label,
  parameters: {
    docs: {
      description: {
        component: `
[Bootstrap Label](https://getbootstrap.com/docs/5.3/components/alerts/)
All our Label are customized from the default bootstrap alerts. Only the customized portions are listed here.
        `,
      },
    },
  },
} as Meta<typeof Label>;

// Define the type for the story
const Template: StoryFn<typeof Label> = (args: any) => <Label {...args} />;

Template.args = {
  children: "Click Here",
};

export { Template as Label };
