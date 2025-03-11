import { Meta, StoryFn } from "@storybook/react/*";
import DefaultCarousel from "../Example/DefaultCarousel";
import React from "react";

export default {
  title: "components/Carousel",
  component: DefaultCarousel,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof DefaultCarousel>;

// Define the type for the story
const Template: StoryFn<typeof DefaultCarousel> = (args: any) => (
  <DefaultCarousel {...args} />
);

Template.args = {};

export { Template as Carousel };

export { default as ImsCarousel } from "../Example/ImsCarouselExample";
