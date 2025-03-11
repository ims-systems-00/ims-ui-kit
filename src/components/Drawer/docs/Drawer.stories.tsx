import { Meta, StoryFn } from "@storybook/react/*";
import Drawer from "../Examples/Drawer";
import React from "react";

export default {
  title: "components/Drawer",
  component: Drawer,
  parameters: {
    docs: {
      description: {
        component: `
This drawer component is build for containing complex views sliding from right side whils users 
still want to stay one a tabular view or a certain list view or any other usecases.
`,
      },
    },
  },
} as Meta<typeof Drawer>;

// Define the type for the story
const Template: StoryFn<typeof Drawer> = (args: any) => <Drawer {...args} />;

Template.args = {};

export { Template as Drawer };
