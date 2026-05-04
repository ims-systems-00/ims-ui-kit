import { Meta, StoryFn } from "@storybook/react/*";
import ModalFooter from "../ModalFooterBase";
import React from "react";

export default {
  title: "components/ModalFooter",
  component: ModalFooter,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof ModalFooter>;

// Define the type for the story
const Template: StoryFn<typeof ModalFooter> = (args: any) => (
  <ModalFooter {...args} />
);

Template.args = {
  children: "Click Here",
};

export { Template as ModalFooter };
