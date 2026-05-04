import { Meta, StoryFn } from "@storybook/react/*";
import CardImgOverlay from "../CardBase";
import React from "react";

export default {
  title: "components/CardImgOverlay",
  component: CardImgOverlay,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof CardImgOverlay>;

// Define the type for the story
const Template: StoryFn<typeof CardImgOverlay> = (args: any) => (
  <CardImgOverlay {...args} />
);

Template.args = {
  children: "Click Here",
};

export { Template as CardImgOverlay };
