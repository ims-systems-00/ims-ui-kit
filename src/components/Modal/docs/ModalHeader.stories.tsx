import { Meta, StoryFn } from "@storybook/react/*";
import ModalHeader from "../ModalHeaderBase";
import React from "react";

export default {
  title: "components/ModalHeader",
  component: ModalHeader,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof ModalHeader>;

// Define the type for the story
const Template: StoryFn<typeof ModalHeader> = (args: any) => (
  <ModalHeader {...args} />
);

Template.args = {
  children: "Click Here",
};

export { Template as ModalHeader };
