import { Meta, StoryFn } from "@storybook/react/*";
import CarouselIndicators from "../CarouselIndicatorsBase";
import React from "react";

export default {
  title: "components/CarouselIndicators",
  component: CarouselIndicators,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof CarouselIndicators>;

// Define the type for the story
const Template: StoryFn<typeof CarouselIndicators> = (args: any) => (
  <CarouselIndicators {...args} />
);

Template.args = {
  children: "Click Here",
};

export { Template as CarouselIndicators };
