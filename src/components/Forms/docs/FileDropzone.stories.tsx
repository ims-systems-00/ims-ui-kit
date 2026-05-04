import { Meta, StoryFn } from "@storybook/react/*";
import FileDropZone from "../Inputs/FileDropZoneBase";
import React from "react";
export default {
  title: "components/Forms/FileDropZone",
  component: FileDropZone,
  parameters: {
    docs: {
      description: {
        component: `
[Bootstrap FileDropZone](https://getbootstrap.com/docs/5.3/components/alerts/)
All our FileDropZone are customized from the default bootstrap alerts. Only the customized portions are listed here.
        `,
      },
    },
  },
} as Meta<typeof FileDropZone>;

// Define the type for the story
const Template: StoryFn<typeof FileDropZone> = (args: any) => (
  <FileDropZone {...args} />
);

Template.args = {};

export { Template as FileDropZone };
