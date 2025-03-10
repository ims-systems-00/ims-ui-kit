import { Meta, StoryFn } from "@storybook/react/*";
import CardImg from "../CardImgBase";
import React from "react";
export default {
  title: "components/CardImg",
  component: CardImg,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof CardImg>;

// Define the type for the story
const Template: StoryFn<typeof CardImg> = (args: any) => <CardImg {...args} />;

Template.args = {
  children: "Click Here",
};

export { Template as CardImg };
