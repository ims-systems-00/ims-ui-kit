import { Meta, StoryFn } from "@storybook/react/*";
import CarouselCaption from "../CarouselCaptionBase";
import React from "react";

export default {
  title: "components/CarouselCaption",
  component: CarouselCaption,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof CarouselCaption>;

// Define the type for the story
const Template: StoryFn<typeof CarouselCaption> = (args: any) => (
  <CarouselCaption {...args} />
);

Template.args = {
  children: "Click Here",
};

export { Template as CarouselCaption };
