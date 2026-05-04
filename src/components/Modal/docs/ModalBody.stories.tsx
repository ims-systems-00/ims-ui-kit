import { Meta, StoryFn } from "@storybook/react/*";
import ModalBody from "../ModalBodyBase";
import React from "react";

export default {
  title: "components/ModalBody",
  component: ModalBody,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof ModalBody>;

// Define the type for the story
const Template: StoryFn<typeof ModalBody> = (args: any) => (
  <ModalBody {...args} />
);

Template.args = {
  children: "Click Here",
};

export { Template as ModalBody };
