import { Meta, StoryFn } from "@storybook/react/*";
import CarouselItem from "../CarouselItemBase";
import React from "react";

export default {
  title: "components/CarouselItem",
  component: CarouselItem,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof CarouselItem>;

// Define the type for the story
const Template: StoryFn<typeof CarouselItem> = (args: any) => (
  <CarouselItem {...args} />
);

Template.args = {
  children: "Click Here",
};

export { Template as CarouselItem };
