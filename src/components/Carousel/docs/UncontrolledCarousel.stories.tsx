import { Meta, StoryFn } from "@storybook/react/*";
import UncontrolledCarousel from "../UncontrolledCarouselBase";
import React from "react";

export default {
  title: "components/UncontrolledCarousel",
  component: UncontrolledCarousel,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof UncontrolledCarousel>;

// Define the type for the story
const Template: StoryFn<typeof UncontrolledCarousel> = (args: any) => (
  <UncontrolledCarousel {...args} />
);

Template.args = {
  children: "Click Here",
};

export { Template as UncontrolledCarousel };
