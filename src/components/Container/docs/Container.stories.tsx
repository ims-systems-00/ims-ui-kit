import { Meta, StoryFn } from "@storybook/react/*";
import Container from "../ContainerBase";
import React from "react";

export default {
  title: "components/Container",
  component: Container,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof Container>;

// Define the type for the story
const Template: StoryFn<typeof Container> = (args: any) => (
  <Container {...args} />
);

Template.args = {
  children: "Click Here",
};

export { Template as Container };
