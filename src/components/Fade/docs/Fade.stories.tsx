import { Meta, StoryFn } from "@storybook/react/*";
import Fade from "../Examples/DefaultFade";
import React from "react";

export default {
  title: "Fade",
  component: Fade,
  parameters: {
    docs: {
      description: {
        component: `
Fade is a component that can be used to fade in and out content.
                `,
      },
    },
  },
} as Meta<typeof Fade>;

// Define the type for the story
const Template: StoryFn<typeof Fade> = (args: any) => <Fade {...args} />;

Template.args = {};

export { Template as Fade };
