import type { Meta, StoryFn } from "@storybook/react";
import Spinner from "../Examples/Spinner";
import React from "react";

export default {
  title: "components/Spinner",
  component: Spinner,
  parameters: {
    docs: {
      description: {
        component: `
[Bootstrap Spinner](https://getbootstrap.com/docs/5.3/components/spinners/)
All our spinner are customized from the default bootstrap spinner. Only the customized portions are listed here.
`,
      },
    },
  },
} as Meta<typeof Spinner>;

// Define the type for the story
const Template: StoryFn<typeof Spinner> = (args: any) => <Spinner {...args} />;

Template.args = {};

export { Template as Spinner };
