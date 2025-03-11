import { Meta, StoryFn } from "@storybook/react/*";
import CarouselControl from "../CarouselControlBase";
import React from "react";

export default {
  title: "components/CarouselControl",
  component: CarouselControl,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof CarouselControl>;

// Define the type for the story
const Template: StoryFn<typeof CarouselControl> = (args: any) => (
  <CarouselControl {...args} />
);

Template.args = {
  children: "Click Here",
};

export { Template as CarouselControl };
