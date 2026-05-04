import { Meta, StoryFn } from "@storybook/react/*";
import OffcanvasBody from "../OffcanvasBodyBase";
import React from "react";
export default {
  title: "components/OffcanvasBody",
  component: OffcanvasBody,
  parameters: {
    docs: {
      description: {
        component: `
[Bootstrap Alert](https://getbootstrap.com/docs/5.3/components/alerts/)
All our alerts are customized from the default bootstrap alerts. Only the customized portions are listed here.
        `,
      },
    },
  },
} as Meta<typeof OffcanvasBody>;

// Define the type for the story
const Template: StoryFn<typeof OffcanvasBody> = (args: any) => (
  <OffcanvasBody {...args} />
);

Template.args = {
  children: "Click Here",
};

export { Template as OffcanvasBody };
